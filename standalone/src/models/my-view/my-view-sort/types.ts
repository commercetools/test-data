import type { TBuilder } from '@/core';
import { TMcSettingsSort } from '@/graphql-types';

// This model does not have a REST version as it only exists in the MC Settings service
// which only supports GraphQL.

export type TMyViewSortGraphql = TMcSettingsSort;

export type TCreateMyViewSortBuilder = () => TBuilder<TMyViewSortGraphql>;
