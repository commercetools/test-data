import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductCatalogDataBuilder,
  TProductCatalogDataGraphql,
  TProductCatalogDataRest,
} from './types';

export const RestModelBuilder: TCreateProductCatalogDataBuilder<
  TProductCatalogDataRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductCatalogDataRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductCatalogDataBuilder<
  TProductCatalogDataGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductCatalogDataGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
