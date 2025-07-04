import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateOAuthClientBuilder } from './types';

export const GraphqlModelBuilder: TCreateOAuthClientBuilder = () =>
  createSpecializedBuilder({
    name: 'OAuthClientGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
