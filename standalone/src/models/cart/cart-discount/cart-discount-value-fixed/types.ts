import {
  CartDiscountValueFixed,
  CartDiscountValueFixedDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TCartDiscountValueFixed = CartDiscountValueFixed;
export type TCartDiscountValueFixedDraft = CartDiscountValueFixedDraft;

export type TCartDiscountValueFixedGraphql = TCartDiscountValueFixed & {
  __typename: 'FixedPriceDiscountValue';
};
export type TCartDiscountValueFixedDraftGraphql = {
  fixed: Omit<TCartDiscountValueFixedDraft, 'type'>;
};

export type TCartDiscountValueFixedBuilder = TBuilder<TCartDiscountValueFixed>;
export type TCartDiscountValueFixedDraftBuilder =
  TBuilder<TCartDiscountValueFixedDraft>;

export type TCreateCartDiscountValueFixedBuilder =
  () => TCartDiscountValueFixedBuilder;
export type TCreateCartDiscountValueFixedDraftBuilder =
  () => TCartDiscountValueFixedDraftBuilder;
