import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateSyncInfoBuilder,
  TSyncInfoGraphql,
  TSyncInfoRest,
} from './types';

export const RestModelBuilder: TCreateSyncInfoBuilder<TSyncInfoRest> = () =>
  createSpecializedBuilder({
    name: 'SyncInfoRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateSyncInfoBuilder<
  TSyncInfoGraphql
> = () =>
  createSpecializedBuilder({
    name: 'SyncInfoGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
