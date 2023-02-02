import type { TBuilder } from '@commercetools-test-data/core';
import {
  CentPrecisionMoney,
  CentPrecisionMoneyDraft,
} from '@commercetools/platform-sdk';

export type TCentPrecisionMoney = CentPrecisionMoney;
export type TCentPrecisionMoneyDraft = CentPrecisionMoneyDraft;

export type TCentPrecisionMoneyGraphql = TCentPrecisionMoney & {
  __typename: 'Money';
};
export type TCentPrecisionMoneyDraftGraphql = TCentPrecisionMoneyDraft & {
  __typename: 'MoneyInput';
};

export type TCentPrecisionMoneyBuilder = TBuilder<TCentPrecisionMoney>;
export type TCentPrecisionMoneyDraftBuilder =
  TBuilder<TCentPrecisionMoneyDraft>;

export type TCreateCentPrecisionMoneyBuilder = () => TCentPrecisionMoneyBuilder;
export type TCreateCentPrecisionMoneyDraftBuilder =
  () => TCentPrecisionMoneyDraftBuilder;
