import type {
  TypedMoney,
  CentPrecisionMoney,
  HighPrecisionMoney,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TTypedMoney = TypedMoney;
export type TCentPrecisionMoney = CentPrecisionMoney;
export type THighPrecisionMoney = HighPrecisionMoney;

export type TMoneyGraphql = TCentPrecisionMoney & {
  __typename: 'Money';
};
export type THighPrecisionMoneyGraphql = THighPrecisionMoney & {
  __typename: 'HighPrecisionMoney';
};
export type TBaseMoneyGraphql = TMoneyGraphql | THighPrecisionMoneyGraphql;

export type TMoneyBuilder = TBuilder<TTypedMoney>;
export type TCreateMoneyBuilder = () => TMoneyBuilder;
