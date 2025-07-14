import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type { TCreate{{@if(it.isDraftModel !== true)}}{{it.modelName}}{{#else}}{{it.baseModelName}}{{/if}}Builder, T{{it.modelName}}Graphql, T{{it.modelName}}Rest } from '{{@if(it.isDraftModel !== true)}}.{{#else}}..{{/if}}/types';

export const RestModelBuilder: TCreate{{@if(it.isDraftModel !== true)}}{{it.modelName}}{{#else}}{{it.baseModelName}}{{/if}}Builder<T{{it.modelName}}Rest> = () =>
  createSpecializedBuilder({
    name: '{{it.modelName}}RestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreate{{@if(it.isDraftModel !== true)}}{{it.modelName}}{{#else}}{{it.baseModelName}}{{/if}}Builder<T{{it.modelName}}Graphql> = () =>
  createSpecializedBuilder({
    name: '{{it.modelName}}GraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
