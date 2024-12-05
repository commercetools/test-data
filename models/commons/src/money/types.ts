import { Money } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

// Base model
export type TMoney = Money;

export type TMoneyGraphql = TMoney & {
  __typename: 'Money';
};

export type TMoneyBuilder = TBuilder<TMoney>;
export type TCreateMoneyBuilder = () => TMoneyBuilder;

// Draft model
export type TMoneyDraft = Money;

export type TMoneyDraftGraphql = TMoneyDraft & {
  __typename: 'Money';
};

export type TMoneyDraftBuilder = TBuilder<TMoneyDraft>;
export type TCreateMoneyDraftBuilder = () => TMoneyDraftBuilder;
