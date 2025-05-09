import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '../../../core';
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

export const CompatProductModelBuilder = <
  TProductModel extends
    | TProductCatalogDataRest
    | TProductCatalogDataGraphql = TProductCatalogDataRest,
>() =>
  createCompatibilityBuilder<TProductModel>({
    name: 'ProductCatalogDataCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TProductModel>,
    },
  });
