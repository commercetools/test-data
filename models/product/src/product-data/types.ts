import type { ProductData } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TCtpProductData } from '@commercetools-test-data/graphql-types';

export type TProductDataRest = ProductData;
export type TProductDataGraphql = TCtpProductData;

/**
 * @deprecated use `TProductDataRest` or `TProductDataGraphql` instead
 */
export type TProductData = TProductDataRest;

export type TCreateProductDataBuilder<
  TProductDataModel extends TProductDataRest | TProductDataGraphql,
> = () => TBuilder<TProductDataModel>;
