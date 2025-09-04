import type { TBuilder } from '@/core';
import { TMcSettingsBusinessUnitsListMyView } from '@/graphql-types';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export type TBusinessUnitsListViewGraphql = TMcSettingsBusinessUnitsListMyView;

export type TCreateBusinessUnitsListViewBuilder =
  () => TBuilder<TBusinessUnitsListViewGraphql>;
