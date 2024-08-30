import {
  isFunction,
  isBuilderFunction,
  isString,
  omitMany,
  pickMany,
} from './helpers';
import type {
  TBuilderMapStateFunction,
  TBuilderOptions,
  TFieldBuilderArgs,
  TBuilder,
  TPropertyBuilder,
  TPropertyFieldUpdater,
  TGeneratorResult,
} from './types';

// The Proxy constructor type does not differentiate between the target and the return type.
// Therefore, we define a custom constructor that requires a different return type.
interface CustomProxyConstructor {
  new <T extends object, H extends object>(
    target: T,
    handler: ProxyHandler<H>
  ): H;
}
const CustomProxy = Proxy as CustomProxyConstructor;

// Internal state object to build up the final model.
const createState = <Model>({
  initial,
}: {
  initial?: Partial<Model>;
} = {}) => {
  let state: Partial<Model> = initial ? { ...initial } : {};

  return {
    get: () => state,
    merge: (update: Partial<Model>) => {
      state = { ...state, ...update };
    },
    set: (prop: string, value: unknown) => {
      state = { ...state, [prop]: value };
    },
  };
};

function PropertyBuilder<Model>(initialProps?: Partial<Model>) {
  const state = createState<Model>({ initial: initialProps });

  const builder: TPropertyBuilder<Model> = new CustomProxy<
    Partial<Model>,
    TPropertyBuilder<Model>
  >(
    {},
    {
      get(_target, prop) {
        switch (prop) {
          case 'get': {
            return () => state.get();
          }
          default: {
            return (fnOrValue: TBuilderMapStateFunction<Model> | unknown) => {
              if (isFunction<TBuilderMapStateFunction<Model>>(fnOrValue)) {
                state.merge(fnOrValue(state.get()));
              } else if (isString(prop)) {
                state.set(prop, fnOrValue);
              }
              return builder;
            };
          }
        }
      },
    }
  );
  return builder;
}

function Builder<Model>({
  generator,
  transformers,
  type,
  name = 'Unknown Builder',
}: TBuilderOptions<Model> = {}): TBuilder<Model> {
  const applyGeneratorIfExists = (): ReturnType<
    TGeneratorResult<Model>['generate']
  > => {
    if (!generator)
      return {
        generatedFields: {} as Model,
        buildableFieldsNames: [],
      };
    return generator.generate();
  };

  const { generatedFields, buildableFieldsNames } = applyGeneratorIfExists();
  const propertyBuilder = PropertyBuilder<Model>(generatedFields);

  const builder: {
    proxy: TBuilder<Model>;
  } = {
    proxy: new CustomProxy<Partial<Model>, TBuilder<Model>>(
      {},
      {
        get(_target, propToSet, foo) {
          // Cypress specs and files that they import are now bundled with
          // webpack starting from Cypress 5 (webpack is now the default preprocessor).
          // This result in non-null check of
          // properties like `__esModule` and `default` to decide what has to be
          // provided as a module export. This means that e.g
          // `empty` in `LocalizedString.presets.empty.en` will be evaluated
          // to the returned function below this check, instead of `Proxy`. To avoid this
          // we need to check against these special properties.
          if (
            isString(propToSet) &&
            ['__esModule', 'default'].includes(propToSet)
          ) {
            return builder.proxy;
          }

          if (isBuilderFunction(propToSet)) {
            return ({
              omitFields = [],
              keepFields = [],
            }: TFieldBuilderArgs<Model> = {}) => {
              const built = propertyBuilder.get() as Model;
              let transformed = built;

              switch (propToSet) {
                case 'build': {
                  transformed = (transformers?.default?.transform({
                    fields: built,
                    buildableFieldsNames,
                    builderName: name,
                  }) ?? built) as Model;
                  break;
                }
                case 'buildGraphql': {
                  transformed = (transformers?.graphql?.transform({
                    fields: built,
                    buildableFieldsNames,
                    builderName: name,
                  }) ?? built) as Model;
                  break;
                }
                case 'buildRest': {
                  transformed = (transformers?.rest?.transform({
                    fields: built,
                    buildableFieldsNames,
                    builderName: name,
                  }) ?? built) as Model;
                  break;
                }
                default:
                  break;
              }

              // TODO: Super hack to try some things out
              if (type === 'rest') {
                transformed = (transformers?.rest?.transform({
                  fields: built,
                  buildableFieldsNames,
                  builderName: name,
                }) ?? built) as Model;
              }
              if (type === 'graphql') {
                // @ts-ignore: TS does not know about the `Model` being an object.
                transformed = (transformers?.graphql?.transform({
                  fields: built,
                  buildableFieldsNames,
                  builderName: name,
                }) ?? built) as Model;
              }

              if (keepFields.length > 0) {
                return pickMany<Model>(transformed, ...keepFields);
              }
              if (omitFields.length > 0) {
                return omitMany<Model>(transformed, ...omitFields);
              }
              return transformed;
            };
          }

          return (fnOrValue: string | TBuilderMapStateFunction<Model>) => {
            if (isString(propToSet)) {
              // @ts-ignore: TS does not know about the `Model` being an object.
              const propertyField = propertyBuilder[propToSet];
              const propertyFieldUpdater = propertyField as
                | TPropertyFieldUpdater<Model>
                | undefined;
              propertyFieldUpdater?.(fnOrValue);
            }

            return builder.proxy;
          };
        },
      }
    ),
  };

  return builder.proxy;
}

export default Builder;
