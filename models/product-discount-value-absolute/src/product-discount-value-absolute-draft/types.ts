import type { TBuilder } from '@commercetools-test-data/core';
import { ProductDiscountValueRelativeDraft } from '@commercetools/platform-sdk';

export type TProductDiscountValueRelativeDraft =
  ProductDiscountValueRelativeDraft;

export type TProductDiscountValueRelativeDraftGraphql =
  TProductDiscountValueRelativeDraft & {
    __typename: 'ProductDiscountValueRelativeDraft';
  };

export type TProductDiscountValueRelativeDraftBuilder =
  TBuilder<TProductDiscountValueRelativeDraft>;
export type TCreateProductDiscountValueRelativeDraftBuilder =
  () => TProductDiscountValueRelativeDraftBuilder;
