import {
  RecurrencePolicy,
  RecurrencePolicyDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpRecurrencePolicy,
  TCtpRecurrencePolicyDraft,
} from '@/graphql-types';

export type TRecurrencePolicyRest = RecurrencePolicy;
export type TRecurrencePolicyDraftRest = RecurrencePolicyDraft;

export type TRecurrencePolicyGraphql = TCtpRecurrencePolicy;
export type TRecurrencePolicyDraftGraphql = TCtpRecurrencePolicyDraft;

export type TCreateRecurrencePolicyBuilder<
  TRecurrencePolicyModel extends
    | TRecurrencePolicyGraphql
    | TRecurrencePolicyDraftGraphql
    | TRecurrencePolicyRest
    | TRecurrencePolicyDraftRest,
> = () => TBuilder<TRecurrencePolicyModel>;
