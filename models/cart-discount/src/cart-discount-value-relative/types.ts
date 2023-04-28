import {
  CartDiscountValueRelative,
  CartDiscountValueRelativeDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountValueRelative = CartDiscountValueRelative;
export type TCartDiscountValueRelativeDraft = CartDiscountValueRelativeDraft;

export type TCartDiscountValueRelativeGraphql = TCartDiscountValueRelative & {
  __typename: 'CartDiscountValueRelative';
};
export type TCartDiscountValueRelativeDraftGraphql =
  TCartDiscountValueRelativeDraft & {
    __typename: 'CartDiscountValueRelativeDraft';
  };

export type TCartDiscountValueRelativeBuilder =
  TBuilder<TCartDiscountValueRelative>;
export type TCartDiscountValueRelativeDraftBuilder =
  TBuilder<TCartDiscountValueRelativeDraft>;

export type TCreateCartDiscountValueRelativeBuilder =
  () => TCartDiscountValueRelativeBuilder;
export type TCreateCartDiscountValueRelativeDraftBuilder =
  () => TCartDiscountValueRelativeDraftBuilder;
