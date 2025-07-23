import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateMoneyBuilder,
  TMoneyDraftRest,
  TMoneyDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateMoneyBuilder<TMoneyDraftRest> = () =>
  createSpecializedBuilder({
    name: 'MoneyDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphQLModelBuilder: TCreateMoneyBuilder<
  TMoneyDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'MoneyDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatMoneyDraftModelBuilder = <
  TMoneyDraftModel extends
    | TMoneyDraftRest
    | TMoneyDraftGraphql = TMoneyDraftRest,
>() =>
  createCompatibilityBuilder<TMoneyDraftModel>({
    name: 'MoneyDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TMoneyDraftModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TMoneyDraftModel>,
    },
  });
