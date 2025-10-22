import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateDashboardViewBuilder } from './types';

export const GraphqlModelBuilder: TCreateDashboardViewBuilder = () =>
  createSpecializedBuilder({
    name: 'DashboardViewGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
