import {
  ProductDiscountValueRelative,
  ProductDiscountValueRelativeDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TProductDiscountValueRelative = ProductDiscountValueRelative;
export type TProductDiscountValueRelativeDraft =
  ProductDiscountValueRelativeDraft;

export type TProductDiscountValueRelativeGraphql =
  TProductDiscountValueRelative & {
    __typename: 'RelativeDiscountValue';
  };
export type TProductDiscountValueRelativeDraftGraphql = {
  relative: Omit<TProductDiscountValueRelativeDraft, 'type'>;
};

export type TProductDiscountValueRelativeBuilder =
  TBuilder<TProductDiscountValueRelative>;
export type TProductDiscountValueRelativeDraftBuilder =
  TBuilder<TProductDiscountValueRelativeDraft>;

export type TCreateProductDiscountValueRelativeBuilder =
  () => TProductDiscountValueRelativeBuilder;
export type TCreateProductDiscountValueRelativeDraftBuilder =
  () => TProductDiscountValueRelativeDraftBuilder;
