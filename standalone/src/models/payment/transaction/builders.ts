import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateTransactionBuilder,
  TTransactionRest,
  TTransactionGraphql,
} from './types';

export const RestModelBuilder: TCreateTransactionBuilder<
  TTransactionRest
> = () =>
  createSpecializedBuilder({
    name: 'TransactionRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTransactionBuilder<
  TTransactionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'TransactionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TTransactionModel extends
    | TTransactionRest
    | TTransactionGraphql = TTransactionRest,
>() =>
  createCompatibilityBuilder<TTransactionModel>({
    name: 'TransactionCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TTransactionModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TTransactionModel>,
    },
  });
