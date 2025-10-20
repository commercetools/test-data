import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateOrderDetailViewBuilder } from './types';

export const GraphqlModelBuilder: TCreateOrderDetailViewBuilder = () =>
  createSpecializedBuilder({
    name: 'OrderDetailViewGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
