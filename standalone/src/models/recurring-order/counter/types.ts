import type { TBuilder } from '@/core';
import { TCtpCounter, TCtpCounterInputDraft } from '@/graphql-types';

export type TCounterGraphql = TCtpCounter;
export type TCounterDraftGraphql = TCtpCounterInputDraft;

export type TCreateCounterBuilder<
  TModel extends TCounterGraphql | TCounterDraftGraphql,
> = () => TBuilder<TModel>;
