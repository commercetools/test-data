import type { ProductCatalogData } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCtpProductCatalogData } from '@commercetools-test-data/graphql-types';

export type TProductCatalogDataRest = ProductCatalogData;
export type TProductCatalogDataGraphql = TCtpProductCatalogData;

export type TCreateProductCatalogDataBuilder<
  TProductCatalogDataModel extends
    | TProductCatalogDataRest
    | TProductCatalogDataGraphql,
> = () => TBuilder<TProductCatalogDataModel>;
