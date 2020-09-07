import type {
  Json,
  TBuilderMapStateFunction,
  TBuilderOptions,
  TFieldBuilderArgs,
  TBuilder,
  TPropertyBuilder,
  TTransformType,
} from './types';

import {
  isFunction,
  isBuilderFunction,
  isString,
  omitMany,
  pickMany,
} from './helpers';

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

            return ({
              omitFields = [],
              keepFields = [],
            }: TFieldBuilderArgs<Model> = {}) => {
              const built = {
                ...builder.generated,
                ...propertyBuilder.get(),
              } as Model;

              let transformed = built;

              switch (propToSet) {
                case 'build': {
                  transformed = (transformers?.default?.transform(built) ??
                    built) as Model;
                  break;
                }
                case 'buildGraphql': {
                  transformed = (transformers?.graphql?.transform(built) ??
                    built) as Model;
                  break;
                }
                case 'buildRest': {
                  transformed = (transformers?.rest?.transform(built) ??
                    built) as Model;
                  break;
                }
                default:
                  break;
              }

              if (keepFields.length > 0) {
                return pickMany<Model>(transformed, ...keepFields);
              }

              return omitMany<Model>(transformed, ...omitFields);
            };
          }

          return (fnOrValue: string | TBuilderMapStateFunction<Model>) => {
            if (!builder.generated) {
              builder.generated = applyGeneratorIfExists();
              // Make the generated data available as functional chaining of the builder.
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
