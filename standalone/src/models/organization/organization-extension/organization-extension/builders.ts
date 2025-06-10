import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateOrganizationExtensionBuilder } from './types';

export const GraphqlModelBuilder: TCreateOrganizationExtensionBuilder = () =>
  createSpecializedBuilder({
    name: 'OrganizationExtensionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
