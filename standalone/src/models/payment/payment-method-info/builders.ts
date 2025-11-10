import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreatePaymentMethodInfoBuilder,
  TPaymentMethodInfoRest,
  TPaymentMethodInfoGraphql,
} from './types';

export const RestModelBuilder: TCreatePaymentMethodInfoBuilder<
  TPaymentMethodInfoRest
> = () =>
  createSpecializedBuilder({
    name: 'PaymentMethodInfoRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreatePaymentMethodInfoBuilder<
  TPaymentMethodInfoGraphql
> = () =>
  createSpecializedBuilder({
    name: 'PaymentMethodInfoGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TPaymentMethodInfoModel extends
    | TPaymentMethodInfoRest
    | TPaymentMethodInfoGraphql = TPaymentMethodInfoRest,
>() =>
  createCompatibilityBuilder<TPaymentMethodInfoModel>({
    name: 'PaymentMethodInfoCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TPaymentMethodInfoModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TPaymentMethodInfoModel>,
    },
  });
