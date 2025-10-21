import type { TBuilder } from '@/core';
import { TMcSettingsOrderDetailView } from '@/graphql-types';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export type TOrderDetailViewGraphql = TMcSettingsOrderDetailView;

export type TCreateOrderDetailViewBuilder =
  () => TBuilder<TOrderDetailViewGraphql>;
