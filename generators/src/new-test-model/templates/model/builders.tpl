import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type { TCreate{{it.modelName}}Builder, T{{it.modelName}}Graphql, T{{it.modelName}}Rest } from '{{@if(it.isDraftModel !== true)}}.{{#else}}..{{/if}}/types';

export const RestModelBuilder: TCreate{{it.modelName}}Builder<T{{it.modelName}}Rest> = () =>
  createSpecializedBuilder({
    name: '{{it.modelName}}RestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreate{{it.modelName}}Builder<T{{it.modelName}}Graphql> = () =>
  createSpecializedBuilder({
    name: '{{it.modelName}}GraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
