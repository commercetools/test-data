import { ReferenceRest } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { ProductType } from '@commercetools-test-data/product-type';
import * as ProductCatalogData from '../../product-catalog-data';
import { Product, ProductGraphql, ProductRest } from '../index';
import { TProduct, TProductGraphql, TProductRest } from '../types';

const populatePreset = <TModel extends TProductGraphql | TProductRest>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key('boring-generic-milk-key')
    .masterData(
      ProductCatalogData.presets.boringGenericMilkProductCatalogData()
    );
};

export const restPreset = (): TBuilder<TProductRest> => {
  return populatePreset(ProductRest.random()).productType(
    ReferenceRest.presets.productTypeReference().obj(ProductType.presets.milk())
  );
};

export const graphqlPreset = (): TBuilder<TProductGraphql> => {
  return populatePreset(ProductGraphql.random()).productType(
    ProductType.presets.milk()
  );
};

export const compatPreset = (): TBuilder<TProduct> => {
  return populatePreset(Product.random()).productType(
    ReferenceRest.presets.productTypeReference().obj(ProductType.presets.milk())
  );
};
