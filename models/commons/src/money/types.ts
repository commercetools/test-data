import type { TypedMoney } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TMoney = TypedMoney;

export type TMoneyGraphql = TMoney & {
  __typename: 'Money';
};

export type TMoneyBuilder = TBuilder<TMoney>;
export type TCreateMoneyBuilder = () => TMoneyBuilder;
