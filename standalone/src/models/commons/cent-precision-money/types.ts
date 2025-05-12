import {
  CentPrecisionMoney,
  CentPrecisionMoneyDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TCentPrecisionMoney = CentPrecisionMoney;
export type TCentPrecisionMoneyDraft = CentPrecisionMoneyDraft;

export type TCentPrecisionMoneyGraphql = TCentPrecisionMoney & {
  __typename: 'Money';
};
export type TCentPrecisionMoneyDraftGraphql = TCentPrecisionMoneyDraft;

export type TCentPrecisionMoneyBuilder = TBuilder<TCentPrecisionMoney>;
export type TCentPrecisionMoneyDraftBuilder =
  TBuilder<TCentPrecisionMoneyDraft>;

export type TCreateCentPrecisionMoneyBuilder = () => TCentPrecisionMoneyBuilder;
export type TCreateCentPrecisionMoneyDraftBuilder =
  () => TCentPrecisionMoneyDraftBuilder;
