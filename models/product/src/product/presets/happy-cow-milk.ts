import { ReferenceRest } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { ProductType } from '@commercetools-test-data/product-type';
import {
  ProductCatalogDataRest,
  ProductCatalogDataGraphql,
} from '../../product-catalog-data';
import { ProductGraphql, ProductRest } from '../index';
import type { TProductGraphql, TProductRest } from '../types';

export const restPreset = (): TBuilder<TProductRest> => {
  return ProductRest.random()
    .key('happy-cow-milk-key')
    .masterData(ProductCatalogDataRest.presets.happyCowMilkProductCatalogData())
    .productType(
      ReferenceRest.presets
        .productTypeReference()
        .obj(ProductType.presets.milk())
    );
};

export const graphqlPreset = (): TBuilder<TProductGraphql> => {
  return ProductGraphql.random()
    .key('happy-cow-milk-key')
    .masterData(
      ProductCatalogDataGraphql.presets.happyCowMilkProductCatalogData()
    )
    .productType(ProductType.presets.milk());
};
