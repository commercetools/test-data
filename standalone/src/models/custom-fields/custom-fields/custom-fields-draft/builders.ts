import { createSpecializedBuilder } from '@/core';
import type {
  TCreateCustomFieldsBuilder,
  TCustomFieldsDraftGraphql,
  TCustomFieldsDraftRest,
} from '../../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateCustomFieldsBuilder<
  TCustomFieldsDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'CustomFieldsDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCustomFieldsBuilder<
  TCustomFieldsDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomFieldsDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
