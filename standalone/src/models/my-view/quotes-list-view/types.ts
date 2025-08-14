import type { TBuilder } from '@/core';
import { TMcSettingsQuotesListView } from '@/graphql-types';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export type TQuotesListViewGraphql = TMcSettingsQuotesListView;

export type TCreateQuotesListViewBuilder =
  () => TBuilder<TQuotesListViewGraphql>;
