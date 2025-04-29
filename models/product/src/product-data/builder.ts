import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductDataBuilder,
  TProductDataGraphql,
  TProductDataRest,
} from './types';

export const RestModelBuilder: TCreateProductDataBuilder<
  TProductDataRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductDataRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductDataBuilder<
  TProductDataGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductDataGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
