import {
  CartDiscountValueRelative,
  CartDiscountValueRelativeDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TCartDiscountValueRelative = CartDiscountValueRelative;
export type TCartDiscountValueRelativeDraft = CartDiscountValueRelativeDraft;

export type TCartDiscountValueRelativeGraphql = TCartDiscountValueRelative & {
  __typename: 'RelativeDiscountValue';
};
export type TCartDiscountValueRelativeDraftGraphql = {
  relative: Omit<TCartDiscountValueRelativeDraft, 'type'>;
};

export type TCartDiscountValueRelativeBuilder =
  TBuilder<TCartDiscountValueRelative>;
export type TCartDiscountValueRelativeDraftBuilder =
  TBuilder<TCartDiscountValueRelativeDraft>;

export type TCreateCartDiscountValueRelativeBuilder =
  () => TCartDiscountValueRelativeBuilder;
export type TCreateCartDiscountValueRelativeDraftBuilder =
  () => TCartDiscountValueRelativeDraftBuilder;
