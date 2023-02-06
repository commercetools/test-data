import type { TBuilder } from '@commercetools-test-data/core';
import {
  CartDiscountValueFixed,
  CartDiscountValueFixedDraft,
} from '@commercetools/platform-sdk';

export type TCartDiscountValueFixed = CartDiscountValueFixed;
export type TCartDiscountValueFixedDraft = CartDiscountValueFixedDraft;

export type TCartDiscountValueFixedGraphql = TCartDiscountValueFixed & {
  __typename: 'CartDiscountValueFixed';
};
export type TCartDiscountValueFixedDraftGraphql =
  TCartDiscountValueFixedDraft & {
    __typename: 'CartDiscountValueFixedDraft';
  };

export type TCartDiscountValueFixedBuilder = TBuilder<TCartDiscountValueFixed>;
export type TCartDiscountValueFixedDraftBuilder =
  TBuilder<TCartDiscountValueFixedDraft>;

export type TCreateCartDiscountValueFixedBuilder =
  () => TCartDiscountValueFixedBuilder;
export type TCreateCartDiscountValueFixedDraftBuilder =
  () => TCartDiscountValueFixedDraftBuilder;
