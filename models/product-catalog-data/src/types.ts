import { ProductCatalogData } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductCatalogData = ProductCatalogData;

export type TProductCatalogDataGraphql = TProductCatalogData & {
  __typename: 'ProductCatalogData';
};

export type TProductCatalogDataBuilder = TBuilder<TProductCatalogData>;
export type TCreateProductCatalogDataBuilder = () => TProductCatalogDataBuilder;
