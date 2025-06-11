import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type { TCreateStoreBuilder, TStoreGraphql, TStoreRest } from './types';

export const RestModelBuilder: TCreateStoreBuilder<TStoreRest> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: restFieldsConfig,
    type: 'rest',
    name: 'StoreGraphqlBuilder',
  });

export const GraphqlModelBuilder: TCreateStoreBuilder<TStoreGraphql> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: graphqlFieldsConfig,
    type: 'graphql',
    name: 'StoreRestBuilder',
  });

export const CompatModelBuilder = <
  TStoreModel extends TStoreGraphql | TStoreRest,
>() =>
  createCompatibilityBuilder<TStoreModel>({
    name: 'StoreCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TStoreModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TStoreModel>,
    },
  });
