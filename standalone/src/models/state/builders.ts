import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type { TCreateStateBuilder, TStateGraphql, TStateRest } from './types';

export const RestModelBuilder: TCreateStateBuilder<TStateRest> = () =>
  createSpecializedBuilder({
    name: 'StateRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateStateBuilder<TStateGraphql> = () =>
  createSpecializedBuilder({
    name: 'StateGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TStateModel extends TStateRest | TStateGraphql = TStateRest,
>() =>
  createCompatibilityBuilder<TStateModel>({
    name: 'StateCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TStateModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TStateModel>,
    },
  });
