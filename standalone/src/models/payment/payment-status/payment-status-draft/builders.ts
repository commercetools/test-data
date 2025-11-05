import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TCreatePaymentStatusBuilder,
  TPaymentStatusDraftRest,
  TPaymentStatusDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreatePaymentStatusBuilder<
  TPaymentStatusDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'PaymentStatusDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreatePaymentStatusBuilder<
  TPaymentStatusDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'PaymentStatusDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TPaymentStatusModel extends
    | TPaymentStatusDraftRest
    | TPaymentStatusDraftGraphql = TPaymentStatusDraftRest,
>() =>
  createCompatibilityBuilder<TPaymentStatusModel>({
    name: 'PaymentStatusDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TPaymentStatusModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TPaymentStatusModel>,
    },
  });
