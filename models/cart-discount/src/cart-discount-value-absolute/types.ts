import {
  CartDiscountValueAbsolute,
  CartDiscountValueAbsoluteDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountValueAbsolute = CartDiscountValueAbsolute;
export type TCartDiscountValueAbsoluteDraft = CartDiscountValueAbsoluteDraft;

export type TCartDiscountValueAbsoluteGraphql = TCartDiscountValueAbsolute & {
  __typename: 'CartDiscountValueAbsolute';
};
export type TCartDiscountValueAbsoluteDraftGraphql =
  TCartDiscountValueAbsoluteDraft;

export type TCartDiscountValueAbsoluteBuilder =
  TBuilder<TCartDiscountValueAbsolute>;
export type TCartDiscountValueAbsoluteDraftBuilder =
  TBuilder<TCartDiscountValueAbsoluteDraft>;

export type TCreateCartDiscountValueAbsoluteBuilder =
  () => TCartDiscountValueAbsoluteBuilder;
export type TCreateCartDiscountValueAbsoluteDraftBuilder =
  () => TCartDiscountValueAbsoluteDraftBuilder;
