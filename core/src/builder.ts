import omit from 'lodash/omit';
import { isFunction, isBuilderFunction, isString, pickMany } from './helpers';
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
    merge: (update: Partial<Model>, overwrite = true) => {
      if (overwrite) {
        state = { ...state, ...update };
      } else {
        state = { ...update, ...state };
      }
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
      // This allows to inject initial props into the state after it's created.
      set(_target, prop, value) {
        if (prop === 'initialProps') {
          state.merge(value, false);
        } else {
          state.set(prop as string, value);
        }
        return true;
      },
    }
  );
  return builder;
}

function Builder<Model>({
  generator,
  transformers,
  type,
  postBuild,
  name = 'Unknown Builder',
  compatConfig,
}: TBuilderOptions<Model> = {}): TBuilder<Model> {
  const applyGenerator = (
    type: 'rest' | 'graphql'
  ): ReturnType<TGeneratorResult<Model>['generate']> => {
    if (compatConfig?.generators) {
      return compatConfig.generators[type].generate();
    }
    if (generator) {
      return generator.generate();
    }
    return {} as Model;
  };

  // We build the properties builder here becuase it handles the builder state and
  // it needs to be bound to the instance.
  // We do not run the generator here though as it can depend on the build call (rest or graphql).
  const propertyBuilder = PropertyBuilder<Model>();

  const builder: {
    proxy: TBuilder<Model>;
  } = {
    proxy: new CustomProxy<Partial<Model>, TBuilder<Model>>(
      {},
      {
        get(_target, propToSet) {
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
              const builderType =
                type === 'graphql' || propToSet === 'buildGraphql'
                  ? 'graphql'
                  : 'rest';

              // Now that we know which type of builder we are dealing with, we can
              // run the appropriate generator
              // This is required for compatibility between the new and legacy models.
              const generatedFields = applyGenerator(builderType);
              // @ts-expect-error `initialProps` is a dymamic property created in the PropertyBuilder proxy
              propertyBuilder.initialProps = generatedFields;

              const built = propertyBuilder.get() as Model;
              let transformed = built;

              // Run transformers (they build the nested models)
              // By now we need to keep the three types in order to be backwards compatible
              // but the "default" one should be removed in the future. When that happens
              // we can get rid of this property and just use the `builderType` one.
              const transformersType =
                type === 'graphql' || propToSet === 'buildGraphql'
                  ? 'graphql'
                  : type === 'rest' || propToSet === 'buildRest'
                    ? 'rest'
                    : 'default';
              transformed = (transformers?.[transformersType]?.transform({
                fields: built,
                builderName: name,
              }) ?? built) as Model;

              if (keepFields.length > 0) {
                transformed = pickMany<Model>(transformed, ...keepFields);
              }
              if (omitFields.length > 0) {
                transformed = omit(transformed as {}, omitFields) as Model;
              }

              // This is required for compatibility between the new and legacy models.
              const postBuilder = compatConfig?.postBuilders
                ? compatConfig.postBuilders[builderType]
                : postBuild;
              if (postBuilder) {
                transformed = {
                  ...transformed,
                  ...postBuilder(transformed),
                };
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
