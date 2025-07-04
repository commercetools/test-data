import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateOAuthScopeBuilder } from './types';

export const GraphqlModelBuilder: TCreateOAuthScopeBuilder = () =>
  createSpecializedBuilder({
    name: 'OAuthScopeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
