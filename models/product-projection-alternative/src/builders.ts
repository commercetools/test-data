import { createSpecializedBuilder } from './core';
import { restGenerator, graphqlGenerator } from './generators';
import type {
  TCreateProductProjectionBuilder,
  TProductProjectionRest,
  TProductProjectionGraphql,
} from './types';

export const RestModelBuilder: TCreateProductProjectionBuilder<
  TProductProjectionRest
> = () =>
  createSpecializedBuilder({
    generator: restGenerator,
    type: 'rest',
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
  });

export const GraphqlModelBuilder: TCreateProductProjectionBuilder<
  TProductProjectionGraphql
> = () =>
  createSpecializedBuilder({
    generator: graphqlGenerator,
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
  });
