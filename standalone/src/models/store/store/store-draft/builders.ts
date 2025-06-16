import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateStoreBuilder,
  TStoreDraftRest,
  TStoreDraftGraphql,
} from '../types';
import { restFieldConfig, graphqlFieldConfig } from './fields-config';

export const RestModelBuilder: TCreateStoreBuilder<TStoreDraftRest> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: restFieldConfig,
    type: 'rest',
    name: 'storeDraftRestBuilder',
  });

export const GraphqlModelBuilder: TCreateStoreBuilder<
  TStoreDraftGraphql
> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: graphqlFieldConfig,
    type: 'graphql',
    name: 'storeDraftGraphqlBuilder',
  });

export const CompatModelBuilder = <
  TStoreDraftModel extends TStoreDraftRest | TStoreDraftGraphql,
>() =>
  createCompatibilityBuilder<TStoreDraftModel>({
    name: 'storeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldConfig as TModelFieldsConfig<TStoreDraftModel>,
      graphql: graphqlFieldConfig as TModelFieldsConfig<TStoreDraftModel>,
    },
  });
