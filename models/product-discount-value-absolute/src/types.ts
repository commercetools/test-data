import type { TBuilder } from '@commercetools-test-data/core';
import { ProductDiscountValueAbsolute } from '@commercetools/platform-sdk';

export type TProductDiscountValueAbsolute = ProductDiscountValueAbsolute;

export type TProductDiscountValueAbsoluteGraphql =
  TProductDiscountValueAbsolute & {
    __typename: 'ProductDiscountValueAbsolute';
  };

export type TProductDiscountValueAbsoluteBuilder =
  TBuilder<TProductDiscountValueAbsolute>;
export type TCreateProductDiscountValueAbsoluteBuilder =
  () => TProductDiscountValueAbsoluteBuilder;
