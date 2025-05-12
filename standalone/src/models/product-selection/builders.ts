import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductSelectionBuilder,
  TProductSelectionGraphql,
  TProductSelectionRest,
} from './types';

export const RestModelBuilder: TCreateProductSelectionBuilder<
  TProductSelectionRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductSelectionRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductSelectionBuilder<
  TProductSelectionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductSelectionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TProductSelectionModel extends
    | TProductSelectionRest
    | TProductSelectionGraphql = TProductSelectionRest,
>() =>
  createCompatibilityBuilder<TProductSelectionModel>({
    name: 'ProductSelectionCompatBuilder',

    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductSelectionModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TProductSelectionModel>,
    },
  });
