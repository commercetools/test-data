import type { TBuilder } from '@/core';
import {
  TMcSettingsPimSearchListView,
  TMcSettingsPimSearchListViewInput,
} from '@/graphql-types';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

// GraphQL types
export type TPimSearchListViewGraphql = TMcSettingsPimSearchListView;
export type TPimSearchListViewDraftGraphql = TMcSettingsPimSearchListViewInput;

export type TCreatePimSearchListViewBuilder<
  TModel extends TPimSearchListViewGraphql | TPimSearchListViewDraftGraphql,
> = () => TBuilder<TModel>;
