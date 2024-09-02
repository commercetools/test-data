import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restInitializers, graphqlInitializers } from './initializers';
import { TCreate{{modelName}}Builder, T{{modelName}}Graphql, T{{modelName}}Rest } from './types';

export const RestModelBuilder: TCreate{{modelName}}Builder<T{{modelName}}Rest> = () =>
  createSpecializedBuilder({
    name: '{{modelName}}RestBuilder',
    type: 'rest',
    initializationConfig: restInitializers,
  });

export const GraphqlModelBuilder: TCreate{{modelName}}Builder<T{{modelName}}Graphql> = () =>
  createSpecializedBuilder({
    name: '{{modelName}}GraphqlBuilder',
    type: 'graphql',
    initializationConfig: graphqlInitializers,
  });
