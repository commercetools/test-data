import type { ProductData } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import type { TCtpProductData } from '../../../graphql-types';

export type TProductDataRest = ProductData;
export type TProductDataGraphql = TCtpProductData;

/**
 * @deprecated use `TProductDataRest` or `TProductDataGraphql` instead
 */
export type TProductData = TProductDataRest;

export type TCreateProductDataBuilder<
  TProductDataModel extends TProductDataRest | TProductDataGraphql,
> = () => TBuilder<TProductDataModel>;
