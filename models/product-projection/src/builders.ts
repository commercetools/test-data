import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductProjectionBuilder,
  TProductProjectionGraphql,
  TProductProjectionRest,
} from './types';

export const RestModelBuilder: TCreateProductProjectionBuilder<
  TProductProjectionRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductProjectionRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductProjectionBuilder<
  TProductProjectionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductProjectionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
