import type { TBuilder } from '@/core';
import { TMcSettingsTable } from '@/graphql-types';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export type TMyViewTableGraphql = TMcSettingsTable;

export type TCreateMyViewTableBuilder = () => TBuilder<TMyViewTableGraphql>;
