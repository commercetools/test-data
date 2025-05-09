import { RecurrencePolicyDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpRecurrencePolicyDraft } from '@commercetools-test-data/graphql-types';

export type TRecurrencePolicyDraftRest = RecurrencePolicyDraft;
export type TRecurrencePolicyDraftGraphql = TCtpRecurrencePolicyDraft;

export type TCreateRecurrencePolicyDraftBuilder<
  TModel extends TRecurrencePolicyDraftRest | TRecurrencePolicyDraftGraphql,
> = () => TBuilder<TModel>;
