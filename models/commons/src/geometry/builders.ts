import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateGeometryBuilder,
  TGeometryGraphql,
  TGeometryRest,
} from './types';

export const RestModelBuilder: TCreateGeometryBuilder<TGeometryRest> = () =>
  createSpecializedBuilder({
    name: 'GeometryRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateGeometryBuilder<
  TGeometryGraphql
> = () =>
  createSpecializedBuilder({
    name: 'GeometryGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });