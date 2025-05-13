import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationPermissionGraphql,
  TCreateCustomApplicationPermissionBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationPermissionBuilder<
  TCustomApplicationPermissionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationPermissionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
