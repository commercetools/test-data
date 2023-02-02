import type { TBuilder } from '@commercetools-test-data/core';
import {
  ProductDiscountValueRelative,
  ProductDiscountValueRelativeDraft,
} from '@commercetools/platform-sdk';

export type TProductDiscountValueRelative = ProductDiscountValueRelative;
export type TProductDiscountValueRelativeDraft =
  ProductDiscountValueRelativeDraft;

export type TProductDiscountValueRelativeGraphql =
  TProductDiscountValueRelative & {
    __typename: 'ProductDiscountValueRelative';
  };
export type TProductDiscountValueRelativeDraftGraphql =
  TProductDiscountValueRelativeDraft & {
    __typename: 'ProductDiscountValueRelativeDraft';
  };

export type TProductDiscountValueRelativeBuilder =
  TBuilder<TProductDiscountValueRelative>;
export type TProductDiscountValueRelativeDraftBuilder =
  TBuilder<TProductDiscountValueRelativeDraft>;

export type TCreateProductDiscountValueRelativeBuilder =
  () => TProductDiscountValueRelativeBuilder;
export type TCreateProductDiscountValueRelativeDraftBuilder =
  () => TProductDiscountValueRelativeDraftBuilder;
