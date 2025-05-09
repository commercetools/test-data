import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '../../../core';
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

export const CompatProductModelBuilder = <
  TProductModel extends
    | TProductDataRest
    | TProductDataGraphql = TProductDataRest,
>() =>
  createCompatibilityBuilder<TProductModel>({
    name: 'ProductDataCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TProductModel>,
    },
  });
