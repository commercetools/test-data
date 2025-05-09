import { TBuilder } from '../../../../core';
import {
  ProductData,
  ProductDataGraphql,
  ProductDataRest,
} from '../../product-data';
import {
  CompatProductModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';
import type {
  TProductCatalogData,
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

export const compatPreset = (): TBuilder<TProductCatalogData> => {
  const productData = ProductData.presets.boringGenericMilkProductData();
  return CompatProductModelBuilder()
    .staged(productData)
    .current(productData)
    .published(true)
    .hasStagedChanges(false);
};
