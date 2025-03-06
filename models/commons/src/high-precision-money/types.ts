import {
  HighPrecisionMoney,
  HighPrecisionMoneyDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpHighPrecisionMoney,
  TCtpHighPrecisionMoneyInput,
} from '@commercetools-test-data/graphql-types';

export type THighPrecisionMoney = HighPrecisionMoney;
export type THighPrecisionMoneyDraft = HighPrecisionMoneyDraft;

export type THighPrecisionMoneyGraphql = TCtpHighPrecisionMoney;
export type THighPrecisionMoneyDraftGraphql = TCtpHighPrecisionMoneyInput;

export type THighPrecisionMoneyBuilder = TBuilder<THighPrecisionMoney>;
export type THighPrecisionMoneyDraftBuilder =
  TBuilder<THighPrecisionMoneyDraft>;

export type TCreateHighPrecisionMoneyBuilder = () => THighPrecisionMoneyBuilder;
export type TCreateHighPrecisionMoneyDraftBuilder =
  () => THighPrecisionMoneyDraftBuilder;
