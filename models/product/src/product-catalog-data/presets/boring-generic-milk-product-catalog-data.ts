import { TBuilder } from '@commercetools-test-data/core';
import { ProductDataGraphql, ProductDataRest } from '../../product-data';
import { GraphqlModelBuilder, RestModelBuilder } from '../builder';
import type {
  TProductCatalogDataGraphql,
  TProductCatalogDataRest,
} from '../types';

export const restPreset = (): TBuilder<TProductCatalogDataRest> => {
  const productData = ProductDataRest.presets.boringGenericMilkProductData();
  return RestModelBuilder()
    .staged(productData)
    .current(productData)
    .published(true)
    .hasStagedChanges(false);
};

export const graphqlPreset = (): TBuilder<TProductCatalogDataGraphql> => {
  const productData = ProductDataGraphql.presets.boringGenericMilkProductData();
  return GraphqlModelBuilder()
    .staged(productData)
    .current(productData)
    .published(true)
    .hasStagedChanges(false);
};
