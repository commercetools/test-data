import {
  HighPrecisionMoney,
  HighPrecisionMoneyDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type THighPrecisionMoney = HighPrecisionMoney;
export type THighPrecisionMoneyDraft = HighPrecisionMoneyDraft;

export type THighPrecisionMoneyGraphql = THighPrecisionMoney & {
  __typename: 'HighPrecisionMoney';
};
export type THighPrecisionMoneyDraftGraphql = THighPrecisionMoneyDraft;

export type THighPrecisionMoneyBuilder = TBuilder<THighPrecisionMoney>;
export type THighPrecisionMoneyDraftBuilder =
  TBuilder<THighPrecisionMoneyDraft>;

export type TCreateHighPrecisionMoneyBuilder = () => THighPrecisionMoneyBuilder;
export type TCreateHighPrecisionMoneyDraftBuilder =
  () => THighPrecisionMoneyDraftBuilder;
