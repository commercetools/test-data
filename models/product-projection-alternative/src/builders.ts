import { Builder, Transformer } from '@commercetools-test-data/core';
import { createSpecializedTransformers, TSpecializedBuilder } from './core';
import { restGenerator, graphqlGenerator } from './generators';
import type {
  TCreateProductProjectionBuilder,
  TProductProjectionRest,
  TProductProjectionGraphql,
} from './types';

export const RestModelBuilder: TCreateProductProjectionBuilder<
  TProductProjectionRest
> = () => {
  const modelBuilder = Builder<TProductProjectionRest>({
    type: 'rest',
    generator: restGenerator,
    transformers: {
      rest: Transformer<TProductProjectionRest, TProductProjectionRest>(
        'rest',
        {
          buildFields: [
            'productType',
            'name',
            'description',
            'slug',
            'categories',
            'metaTitle',
            'metaDescription',
            'metaKeywords',
            'state',
            'taxCategory',
            'masterVariant',
            'variants',
          ],
        }
      ),
    },
  });
  modelBuilder.build = modelBuilder.buildRest;

  return modelBuilder as TSpecializedBuilder<TProductProjectionRest>;
};

export const GraphqlModelBuilder: TCreateProductProjectionBuilder<
  TProductProjectionGraphql
> = () => {
  const modelBuilder = Builder<TProductProjectionGraphql>({
    type: 'graphql',
    generator: graphqlGenerator,
    transformers: createSpecializedTransformers<TProductProjectionGraphql>({
      type: 'graphql',
      buildFields: [
        'categories',
        'categoriesRef',
        'descriptionAllLocales',
        'masterVariant',
        'metaDescriptionAllLocales',
        'metaKeywordsAllLocales',
        'metaTitleAllLocales',
        'nameAllLocales',
        'productType',
        'productTypeRef',
        'slugAllLocales',
        'state',
        'stateRef',
        'taxCategory',
        'taxCategoryRef',
        'variants',
      ],
    }),
  });

  return modelBuilder as TSpecializedBuilder<TProductProjectionGraphql>;
};
