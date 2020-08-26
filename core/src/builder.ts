import type {
  Json,
  TMapFunction,
  TBuilderOptions,
  TBuilder,
  TPropertyBuilder,
  TTransformType,
} from './types';

import {
  isFunction,
  isBuilderFunction,
  isString,
  onlyProps,
  omitMany,
} from './helpers';

interface CustomProxyConstructor {
  new <T, H extends object>(target: T, handler: ProxyHandler<H>): H;
}
const CustomProxy = Proxy as CustomProxyConstructor;

const createState = <Model extends Json>({
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

function PropertyBuilder<Model extends Json>({
  defaults,
}: { defaults?: Partial<Model> } = {}) {
  const state = createState<Model>({ initial: defaults });

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
          case 'update': {
            return (update: Partial<Model>) => {
              state.merge(update);
              return builder;
            };
          }
          default: {
            return (fnOrValue: TMapFunction<Model> | unknown) => {
              if (isFunction<TMapFunction<Model>>(fnOrValue)) {
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

function Builder<Model extends Json, TransformerType extends TTransformType>({
  defaults,
  generator,
  transformers,
}: TBuilderOptions<Model> = {}): TBuilder<TransformerType, Model> {
  const propertyBuilder = PropertyBuilder<Model>({ defaults });
  const applyGeneratorIfExists = (): Partial<Model> => {
    if (!generator) return {};
    return generator.generate({ defaults });
  };

  const builder: {
    generated: Partial<Model> | null;
    proxy: TBuilder<TransformerType, Model>;
  } = {
    generated: null,
    proxy: new CustomProxy<Partial<Model>, TBuilder<TransformerType, Model>>(
      {},
      {
        get(_target, propToSet) {
          if (isBuilderFunction(propToSet)) {
            if (!builder.generated) {
              builder.generated = applyGeneratorIfExists();
            }

            return ({ omitFields = [], onlyFields = null } = {}) => {
              const built = {
                ...builder.generated,
                ...propertyBuilder.get(),
              } as Model;

              switch (propToSet) {
                case 'build':
                  return onlyProps<Model>(
                    onlyFields,
                    omitMany(
                      transformers?.default?.transform(built) ?? built,
                      omitFields
                    )
                  );
                case 'buildGraphql':
                  return onlyProps<Model>(
                    onlyFields,
                    omitMany(
                      transformers?.graphql?.transform(built) ?? built,
                      omitFields
                    )
                  );
                case 'buildRest':
                  return onlyProps<Model>(
                    onlyFields,
                    omitMany(
                      transformers?.rest?.transform(built) ?? built,
                      omitFields
                    )
                  );
                default:
                  return onlyProps<Model>(
                    onlyFields,
                    omitMany(built, omitFields)
                  );
              }
            };
          }

          return (fnOrValue: string | TMapFunction<Model>) => {
            if (!builder.generated) {
              builder.generated = applyGeneratorIfExists();
              // So generated data is available in functional chaining of builder.
              propertyBuilder.update(builder.generated);
            }

            if (isString(propToSet)) {
              propertyBuilder[propToSet](fnOrValue);
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
