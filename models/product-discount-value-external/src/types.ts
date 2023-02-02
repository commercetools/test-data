import type { TBuilder } from '@commercetools-test-data/core';
import { ProductDiscountValueExternal } from '@commercetools/platform-sdk';

export type TProductDiscountValueExternal = ProductDiscountValueExternal;

export type TProductDiscountValueExternalGraphql =
  TProductDiscountValueExternal & {
    __typename: 'ProductDiscountValueExternal';
  };

export type TProductDiscountValueExternalBuilder =
  TBuilder<TProductDiscountValueExternal>;
export type TCreateProductDiscountValueExternalBuilder =
  () => TProductDiscountValueExternalBuilder;
