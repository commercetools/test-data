import { Counter, CounterDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpCounter, TCtpCounterInputDraft } from '@/graphql-types';

export type TCounterRest = Counter;
export type TCounterDraftRest = CounterDraft;

export type TCounterGraphql = TCtpCounter;
export type TCounterDraftGraphql = TCtpCounterInputDraft;

export type TCreateCounterBuilder<
  TCounterModel extends
    | TCounterGraphql
    | TCounterDraftGraphql
    | TCounterRest
    | TCounterDraftRest,
> = () => TBuilder<TCounterModel>;
