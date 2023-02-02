import type { TBuilder } from '@commercetools-test-data/core';
import { ProductDiscountValueAbsoluteDraft } from '@commercetools/platform-sdk';

export type TProductDiscountValueAbsoluteDraft =
  ProductDiscountValueAbsoluteDraft;

export type TProductDiscountValueAbsoluteDraftGraphql =
  TProductDiscountValueAbsoluteDraft & {
    __typename: 'ProductDiscountValueAbsoluteDraft';
  };

export type TProductDiscountValueAbsoluteDraftBuilder =
  TBuilder<TProductDiscountValueAbsoluteDraft>;
export type TCreateProductDiscountValueAbsoluteDraftBuilder =
  () => TProductDiscountValueAbsoluteDraftBuilder;
