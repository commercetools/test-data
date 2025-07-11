import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateLocationBuilder,
  TLocationGraphql,
  TLocationRest,
} from './types';

export const RestModelBuilder: TCreateLocationBuilder<TLocationRest> = () =>
  createSpecializedBuilder({
    name: 'LocationRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateLocationBuilder<
  TLocationGraphql
> = () =>
  createSpecializedBuilder({
    name: 'LocationGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatLocationModelBuilder = <
  TLocationModel extends TLocationRest | TLocationGraphql = TLocationRest,
>() =>
  createCompatibilityBuilder<TLocationModel>({
    name: 'LocationCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TLocationModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TLocationModel>,
    },
  });
