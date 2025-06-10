import type { TBuilder } from '@/core';
import { TMcSettingsNestedTable } from '@/graphql-types';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export type TMyViewNestedTableGraphql = TMcSettingsNestedTable;

export type TCreateMyViewNestedTableBuilder =
  () => TBuilder<TMyViewNestedTableGraphql>;
