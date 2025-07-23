import { Money } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpMoney, TCtpMoneyDraft } from '@/graphql-types';

/**
 * @deprecated use `TMoneyRest` or `TMoneyGraphql` instead
 */
export type TMoney = Money;
/**
 * @deprecated use `TMoneyDraftRest` or `TMoneyDraftGraphql` instead
 */
export type TMoneyDraft = Money;

// REST types
export type TMoneyRest = Money;
export type TMoneyDraftRest = Money;

// GraphQL types
export type TMoneyGraphql = TCtpMoney;
export type TMoneyDraftGraphql = TCtpMoneyDraft;

// Builders
export type TCreateMoneyBuilder<
  TModel extends
    | TMoney
    | TMoneyDraft
    | TMoneyRest
    | TMoneyGraphql
    | TMoneyDraftRest
    | TMoneyDraftGraphql,
> = () => TBuilder<TModel>;
