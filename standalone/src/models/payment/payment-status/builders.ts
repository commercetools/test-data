import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreatePaymentStatusBuilder,
  TPaymentStatusRest,
  TPaymentStatusGraphql,
} from './types';

export const RestModelBuilder: TCreatePaymentStatusBuilder<
  TPaymentStatusRest
> = () =>
  createSpecializedBuilder({
    name: 'PaymentStatusRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreatePaymentStatusBuilder<
  TPaymentStatusGraphql
> = () =>
  createSpecializedBuilder({
    name: 'PaymentStatusGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TPaymentStatusModel extends
    | TPaymentStatusRest
    | TPaymentStatusGraphql = TPaymentStatusRest,
>() =>
  createCompatibilityBuilder<TPaymentStatusModel>({
    name: 'PaymentStatusCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TPaymentStatusModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TPaymentStatusModel>,
    },
  });
