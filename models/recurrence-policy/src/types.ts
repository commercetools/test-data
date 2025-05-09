import {
  RecurrencePolicy,
  RecurrencePolicyDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpRecurrencePolicy,
  TCtpRecurrencePolicyDraft,
} from '@commercetools-test-data/graphql-types';

export type TRecurrencePolicyRest = RecurrencePolicy;
export type TRecurrencePolicyDraftRest = RecurrencePolicyDraft;
export type TRecurrencePolicyGraphql = TCtpRecurrencePolicy;
export type TRecurrencePolicyDraftGraphql = TCtpRecurrencePolicyDraft;

export type TCreateRecurrencePolicyBuilder<
  TModel extends
    | TRecurrencePolicyRest
    | TRecurrencePolicyGraphql
    | TRecurrencePolicyDraftRest
    | TRecurrencePolicyDraftGraphql,
> = () => TBuilder<TModel>;
