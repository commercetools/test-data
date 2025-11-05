import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TCreateTransactionBuilder,
  TTransactionDraftRest,
  TTransactionDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateTransactionBuilder<
  TTransactionDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'TransactionDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTransactionBuilder<
  TTransactionDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'TransactionDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TTransactionModel extends
    | TTransactionDraftRest
    | TTransactionDraftGraphql = TTransactionDraftRest,
>() =>
  createCompatibilityBuilder<TTransactionModel>({
    name: 'TransactionDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TTransactionModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TTransactionModel>,
    },
  });
