import type { TBuilder } from '@/core';
import {
  TCtpRecurrencePolicy,
  TCtpRecurrencePolicyDraft,
} from '@/graphql-types';

export type TRecurrencePolicyGraphql = TCtpRecurrencePolicy;
export type TRecurrencePolicyDraftGraphql = TCtpRecurrencePolicyDraft;

export type TCreateRecurrencePolicyBuilder<
  TModel extends TRecurrencePolicyGraphql | TRecurrencePolicyDraftGraphql,
> = () => TBuilder<TModel>;
