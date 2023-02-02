import type { TBuilder } from '@commercetools-test-data/core';
import { CentPrecisionMoneyDraft } from '@commercetools/platform-sdk';

export type TCentPrecisionMoneyDraft = CentPrecisionMoneyDraft;

export type TCentPrecisionMoneyDraftGraphql = TCentPrecisionMoneyDraft & {
  __typename: 'MoneyInput';
};

export type TCentPrecisionMoneyDraftBuilder =
  TBuilder<TCentPrecisionMoneyDraft>;
export type TCreateCentPrecisionMoneyDraftBuilder =
  () => TCentPrecisionMoneyDraftBuilder;
