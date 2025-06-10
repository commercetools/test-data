import type { TBuilder } from '@/core';
import { TMcSettingsSort } from '@/graphql-types';

export type TMyViewSortGraphql = TMcSettingsSort;

export type TCreateMyViewSortBuilder = () => TBuilder<TMyViewSortGraphql>;
