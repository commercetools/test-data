import { Money } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpMoney, TCtpMoneyDraft } from '@/graphql-types';

export type TMoneyRest = Money;
export type TMoneyDraftRest = Money;
export type TMoneyGraphql = TCtpMoney;
export type TMoneyDraftGraphql = TCtpMoneyDraft;

export type TCreateMoneyBuilder<
  TModel extends
    | TMoneyRest
    | TMoneyGraphql
    | TMoneyDraftRest
    | TMoneyDraftGraphql,
> = () => TBuilder<TModel>;
