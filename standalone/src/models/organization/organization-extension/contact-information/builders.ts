import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateContactInformationBuilder } from './types';

export const GraphqlModelBuilder: TCreateContactInformationBuilder = () =>
  createSpecializedBuilder({
    name: 'ContactInformationGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
