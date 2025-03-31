import { TBuilder } from '@commercetools-test-data/core';
import { ProductType } from '@commercetools-test-data/product-type';
import * as ProductCatalogData from '../../product-catalog-data';
import { Product, ProductGraphql, ProductRest } from '../index';
import { TProduct, TProductGraphql, TProductRest } from '../types';

const populatePreset = <TModel extends TProductGraphql | TProductRest>(
  builder: TBuilder<TModel>
) => {
  return builder
    .productType(ProductType.presets.milk())
    .key('happy-cow-milk-key')
    .masterData(ProductCatalogData.presets.happyCowMilkProductCatalogData());
};

export const restPreset = (): TBuilder<TProductRest> => {
  return populatePreset(ProductRest.random());
};

export const graphqlPreset = (): TBuilder<TProductGraphql> => {
  return populatePreset(ProductGraphql.random());
};

export const compatPreset = (): TBuilder<TProduct> => {
  return populatePreset(Product.random());
};
