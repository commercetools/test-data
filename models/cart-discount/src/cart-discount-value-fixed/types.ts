import {
  CartDiscountValueFixed,
  CartDiscountValueFixedDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountValueFixed = CartDiscountValueFixed;
export type TCartDiscountValueFixedDraft = CartDiscountValueFixedDraft;

export type TCartDiscountValueFixedGraphql = TCartDiscountValueFixed & {
  __typename: 'CartDiscountValueFixed';
};
export type TCartDiscountValueFixedDraftGraphql = TCartDiscountValueFixedDraft;

export type TCartDiscountValueFixedBuilder = TBuilder<TCartDiscountValueFixed>;
export type TCartDiscountValueFixedDraftBuilder =
  TBuilder<TCartDiscountValueFixedDraft>;

export type TCreateCartDiscountValueFixedBuilder =
  () => TCartDiscountValueFixedBuilder;
export type TCreateCartDiscountValueFixedDraftBuilder =
  () => TCartDiscountValueFixedDraftBuilder;
