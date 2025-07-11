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
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateStoreBuilder<TStoreDraftRest> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: restFieldsConfig,
    type: 'rest',
    name: 'StoreDraftRestBuilder',
  });

export const GraphqlModelBuilder: TCreateStoreBuilder<
  TStoreDraftGraphql
> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: graphqlFieldsConfig,
    type: 'graphql',
    name: 'StoreDraftGraphqlBuilder',
  });

export const CompatModelBuilder = <
  TStoreDraftModel extends TStoreDraftRest | TStoreDraftGraphql,
>() =>
  createCompatibilityBuilder<TStoreDraftModel>({
    name: 'StoreDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TStoreDraftModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TStoreDraftModel>,
    },
  });
