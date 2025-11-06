import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TCreatePaymentMethodInfoBuilder,
  TPaymentMethodInfoDraftRest,
  TPaymentMethodInfoDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreatePaymentMethodInfoBuilder<
  TPaymentMethodInfoDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'PaymentMethodInfoDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreatePaymentMethodInfoBuilder<
  TPaymentMethodInfoDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'PaymentMethodInfoDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TPaymentMethodInfoModel extends
    | TPaymentMethodInfoDraftRest
    | TPaymentMethodInfoDraftGraphql = TPaymentMethodInfoDraftRest,
>() =>
  createCompatibilityBuilder<TPaymentMethodInfoModel>({
    name: 'PaymentMethodInfoDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TPaymentMethodInfoModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TPaymentMethodInfoModel>,
    },
  });
