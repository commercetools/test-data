import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductTailoringDataBuilder,
  TProductTailoringDataGraphql,
  TProductTailoringDataRest,
} from './types';

export const RestModelBuilder: TCreateProductTailoringDataBuilder<
  TProductTailoringDataRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductTailoringDataRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductTailoringDataBuilder<
  TProductTailoringDataGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductTailoringDataGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
