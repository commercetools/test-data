import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type { TCreateMoneyBuilder, TMoneyGraphql, TMoneyRest } from './types';

export const RestModelBuilder: TCreateMoneyBuilder<TMoneyRest> = () =>
  createSpecializedBuilder({
    name: 'MoneyRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphQLModelBuilder: TCreateMoneyBuilder<TMoneyGraphql> = () =>
  createSpecializedBuilder({
    name: 'MoneyGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatMoneyModelBuilder = <
  TMoneyModel extends TMoneyRest | TMoneyGraphql = TMoneyRest,
>() =>
  createCompatibilityBuilder<TMoneyModel>({
    name: 'MoneyCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TMoneyModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TMoneyModel>,
    },
  });
