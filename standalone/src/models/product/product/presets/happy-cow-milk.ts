import type { TBuilder } from '../../../../core';
import { ReferenceRest } from '../../../commons';
import { ProductType } from '../../../product-type';
import {
  ProductCatalogDataRest,
  ProductCatalogDataGraphql,
  ProductCatalogData,
} from '../../product-catalog-data';
import { Product, ProductGraphql, ProductRest } from '../index';
import type { TProduct, TProductGraphql, TProductRest } from '../types';

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

export const compatPreset = (): TBuilder<TProduct> => {
  return Product.random()
    .key('happy-cow-milk-key')
    .masterData(ProductCatalogData.presets.happyCowMilkProductCatalogData())
    .productType(ProductType.presets.milk());
};
