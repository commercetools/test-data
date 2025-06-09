import { createSpecializedBuilder } from '@/core';
import type {
  TOidcSsoConfigDraftGraphql,
  TCreateOidcSsoConfigBuilder,
} from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateOidcSsoConfigBuilder<
  TOidcSsoConfigDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'OidcSsoConfigDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
