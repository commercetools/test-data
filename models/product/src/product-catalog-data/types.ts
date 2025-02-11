import { ProductCatalogData } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCtpProductCatalogData } from '@commercetools-test-data/graphql-types';

export type TProductCatalogData = ProductCatalogData;

export type TProductCatalogDataGraphql = TCtpProductCatalogData;

export type TProductCatalogDataBuilder = TBuilder<TProductCatalogData>;
export type TCreateProductCatalogDataBuilder = () => TProductCatalogDataBuilder;
