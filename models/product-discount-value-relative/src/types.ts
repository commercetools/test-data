import type { TBuilder } from '@commercetools-test-data/core';
import { ProductDiscountValueRelative } from '@commercetools/platform-sdk';

export type TProductDiscountValueRelative = ProductDiscountValueRelative;

export type TProductDiscountValueRelativeGraphql =
  TProductDiscountValueRelative & {
    __typename: 'ProductDiscountValueRelative';
  };

export type TProductDiscountValueRelativeBuilder =
  TBuilder<TProductDiscountValueRelative>;
export type TCreateProductDiscountValueRelativeBuilder =
  () => TProductDiscountValueRelativeBuilder;
