import {
  Builder,
  TBuilder,
  TGeneratorResult,
  Transformer,
} from '@commercetools-test-data/core';

/* Utilitiy stuff that should be moved to core package */

export type TSpecializedBuilder<TModel> = Omit<
  TBuilder<TModel>,
  'build' | 'buildRest' | 'buildGraphql'
> & {
  build: () => TModel;
};

type TCreateSpecializedTransformersParams<TModel> = {
  type: 'rest' | 'graphql';
  buildFields: (keyof TModel)[];
};
export const createSpecializedTransformers = <TModel>({
  type,
  buildFields,
}: TCreateSpecializedTransformersParams<TModel>) => {
  return {
    [type]: Transformer<TModel, TModel>(type, {
      buildFields: buildFields,
    }),
  };
};

type TCreateSpecializedBuilderParams<TModel> = {
  generator: TGeneratorResult<TModel>;
  type: 'rest' | 'graphql';
  buildFields?: (keyof TModel)[];
};
export const createSpecializedBuilder = <TModel>(
  params: TCreateSpecializedBuilderParams<TModel>
) => {
  const modelBuilder = Builder<TModel>({
    type: params.type,
    generator: params.generator,
    transformers: createSpecializedTransformers<TModel>({
      type: params.type,
      buildFields: params.buildFields || [],
    }),
  });

  return modelBuilder as TSpecializedBuilder<TModel>;
};
