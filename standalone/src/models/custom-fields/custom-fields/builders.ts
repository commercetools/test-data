import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCustomFieldsBuilder,
  TCustomFieldsGraphql,
  TCustomFieldsRest,
} from './types';

export const RestModelBuilder: TCreateCustomFieldsBuilder<
  TCustomFieldsRest
> = () =>
  createSpecializedBuilder({
    name: 'CustomFieldsRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCustomFieldsBuilder<
  TCustomFieldsGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomFieldsGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
