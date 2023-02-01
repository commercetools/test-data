import type { TBuilder } from '@commercetools-test-data/core';
import { CentPrecisionMoney } from '@commercetools/platform-sdk';

export type TCentPrecisionMoney = CentPrecisionMoney;

export type TCentPrecisionMoneyGraphql = TCentPrecisionMoney & {
  __typename: 'Money';
};

export type TCentPrecisionMoneyBuilder = TBuilder<TCentPrecisionMoney>;
export type TCreateCentPrecisionMoneyBuilder = () => TCentPrecisionMoneyBuilder;
