import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import { TCategorySearchBuilder } from './types';

export const GraphqlModelBuilder: TCategorySearchBuilder = () =>
  createSpecializedBuilder({
    name: 'CategorySearchGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
