import type { TBuilder } from '@/core';
import { ReferenceRest } from '@/models/commons';
import {
  ProductType,
  ProductTypeGraphql,
  ProductTypeRest,
} from '@/models/product-type';
import {
  ProductCatalogData,
  ProductCatalogDataGraphql,
  ProductCatalogDataRest,
} from '../../product-catalog-data';
import { Product, ProductGraphql, ProductRest } from '../index';
import type { TProduct, TProductGraphql, TProductRest } from '../types';

export const restPreset = (): TBuilder<TProductRest> => {
  return ProductRest.random()
    .key('boring-generic-milk-key')
    .masterData(
      ProductCatalogDataRest.presets.boringGenericMilkProductCatalogData()
    )
    .productType(
      ReferenceRest.presets
        .productTypeReference()
        .obj(ProductTypeRest.presets.milk())
    );
};

export const graphqlPreset = (): TBuilder<TProductGraphql> => {
  return ProductGraphql.random()
    .key('boring-generic-milk-key')
    .masterData(
      ProductCatalogDataGraphql.presets.boringGenericMilkProductCatalogData()
    )
    .productType(ProductTypeGraphql.presets.milk());
};

export const compatPreset = (): TBuilder<TProduct> => {
  return Product.random()
    .key('boring-generic-milk-key')
    .masterData(
      ProductCatalogData.presets.boringGenericMilkProductCatalogData()
    )
    .productType(ProductType.presets.milk());
};
