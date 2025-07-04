import { SyncInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpSyncInfo } from '@/graphql-types';

export type TSyncInfoRest = SyncInfo;
export type TSyncInfoGraphql = TCtpSyncInfo;

export type TCreateSyncInfoBuilder<
  TModel extends TSyncInfoRest | TSyncInfoGraphql,
> = () => TBuilder<TModel>;
