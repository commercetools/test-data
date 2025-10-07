import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder = () =>
  createSpecializedBuilder({
    name: 'AttributeGroupDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder = () =>
  createSpecializedBuilder({
    name: 'AttributeGroupDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
