import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductTailoringAttributeBuilder,
  TProductTailoringAttributeGraphql,
  TProductTailoringAttributeRest,
} from './types';

export const RestModelBuilder: TCreateProductTailoringAttributeBuilder<
  TProductTailoringAttributeRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductTailoringAttributeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductTailoringAttributeBuilder<
  TProductTailoringAttributeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductTailoringAttributeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
