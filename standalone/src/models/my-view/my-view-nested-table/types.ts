import type { TBuilder } from '@/core';
import { TMcSettingsNestedTable } from '@/graphql-types';

export type TMyViewNestedTableGraphql = TMcSettingsNestedTable;

export type TCreateMyViewNestedTableBuilder =
  () => TBuilder<TMyViewNestedTableGraphql>;
