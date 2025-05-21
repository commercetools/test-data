import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateProductSelectionBuilder,
  TProductSelectionDraftGraphql,
  TProductSelectionDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateProductSelectionBuilder<
  TProductSelectionDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductSelectionDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductSelectionBuilder<
  TProductSelectionDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductSelectionDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TProductSelectionModel extends
    | TProductSelectionDraftRest
    | TProductSelectionDraftGraphql = TProductSelectionDraftRest,
>() =>
  createCompatibilityBuilder<TProductSelectionModel>({
    name: 'ProductSelectionCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductSelectionModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TProductSelectionModel>,
    },
  });
