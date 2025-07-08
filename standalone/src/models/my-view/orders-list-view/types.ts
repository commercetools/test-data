import type { TBuilder } from '@/core';
import { TMcSettingsOrdersListView } from '@/graphql-types';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export type TOrdersListViewGraphql = TMcSettingsOrdersListView;

export type TCreateOrdersListViewBuilder =
  () => TBuilder<TOrdersListViewGraphql>;
