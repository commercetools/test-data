import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TOidcSsoConfigGraphql,
  TCreateOidcSsoConfigBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateOidcSsoConfigBuilder<
  TOidcSsoConfigGraphql
> = () =>
  createSpecializedBuilder({
    name: 'OidcSsoConfigGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
