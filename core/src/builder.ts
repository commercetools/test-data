import type {
  Json,
  TMapFunction,
  TBuilderOptions,
  TBuilder,
  TPropertyBuilder,
  TTransformBuildName,
} from './types';

import {
  isFunction,
  isString,
  convertBuiltNameToTransformName,
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

function Builder<Model extends Json, TransformedModel extends Json>({
  defaults,
  generator,
  transformer,
}: TBuilderOptions<Model, TransformedModel> = {}): TBuilder<Model> {
  const propertyBuilder = PropertyBuilder<Model>({ defaults });
  const applyGeneratorIfExists = (): Partial<Model> => {
    if (!generator) return {};
    return generator.generate({ defaults });
  };

  const builder: {
    generated: Partial<Model> | null;
    proxy: TBuilder<Model>;
  } = {
    generated: null,
    proxy: new CustomProxy<Partial<Model>, TBuilder<Model>>(
      {},
      {
        get(_target, propToSet) {
          if (isString(propToSet) && propToSet.startsWith('build')) {
            if (!builder.generated) {
              builder.generated = applyGeneratorIfExists();
            }

            return ({ omitFields = [], onlyFields = null } = {}) => {
              const built = {
                ...builder.generated,
                ...propertyBuilder.get(),
              } as Model;

              const nameOfTransform = convertBuiltNameToTransformName(
                propToSet as TTransformBuildName
              );

              if (
                propToSet === 'built' ||
                !transformer?.hasTransform(nameOfTransform)
              ) {
                return onlyProps<Model>(
                  onlyFields,
                  omitMany(built, omitFields)
                );
              }

              return onlyProps<TransformedModel>(
                onlyFields,
                omitMany(
                  transformer.transform({
                    name: nameOfTransform,
                    fields: built,
                  }),
                  omitFields
                )
              );
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
