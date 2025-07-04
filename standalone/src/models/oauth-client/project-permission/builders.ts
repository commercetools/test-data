import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateProjectPermissionBuilder } from './types';

export const GraphqlModelBuilder: TCreateProjectPermissionBuilder = () =>
  createSpecializedBuilder({
    name: 'ProjectPermissionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
