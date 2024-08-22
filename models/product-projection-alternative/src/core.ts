import { TBuilder, Transformer } from '@commercetools-test-data/core';

/* Utilitiy stuff that should be moved to core package */

export type TSpecializedBuilder<TModel> = Omit<
  TBuilder<TModel>,
  'build' | 'buildRest' | 'buildGraphql'
> & {
  build: () => TModel;
};

type TCreateSpecializedBuilderParams<TModel> = {
  type: 'rest' | 'graphql';
  buildFields: (keyof TModel)[];
};
export const createSpecializedTransformers = <TModel>({
  type,
  buildFields,
}: TCreateSpecializedBuilderParams<TModel>) => {
  return {
    [type]: Transformer<TModel, TModel>(type, {
      buildFields: buildFields,
    }),
  };
};
