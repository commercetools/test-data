import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateOrdersListViewBuilder } from './types';

export const GraphqlModelBuilder: TCreateOrdersListViewBuilder = () =>
  createSpecializedBuilder({
    name: 'OrdersListViewGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
