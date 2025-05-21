import type { ProductCatalogData } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpProductCatalogData } from '@/graphql-types';

export type TProductCatalogDataRest = ProductCatalogData;
export type TProductCatalogDataGraphql = TCtpProductCatalogData;
/**
 * @deprecated use `TProductCatalogDataRest` or `TProductCatalogDataGraphql` instead
 */
export type TProductCatalogData = TProductCatalogDataRest;
export type TCreateProductCatalogDataBuilder<
  TProductCatalogDataModel extends
    | TProductCatalogDataRest
    | TProductCatalogDataGraphql,
> = () => TBuilder<TProductCatalogDataModel>;
