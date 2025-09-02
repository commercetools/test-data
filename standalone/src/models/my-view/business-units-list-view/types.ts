import type { TBuilder } from '@/core';
import { TMcSettingsBusinessUnitsListMyView } from '@/graphql-types';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export type TBusinessUnitsListMyViewGraphql =
  TMcSettingsBusinessUnitsListMyView;

export type TCreateBusinessUnitsListMyViewBuilder =
  () => TBuilder<TBusinessUnitsListMyViewGraphql>;
