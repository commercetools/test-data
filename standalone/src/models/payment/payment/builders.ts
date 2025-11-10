import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreatePaymentBuilder,
  TPaymentRest,
  TPaymentGraphql,
} from './types';

export const RestModelBuilder: TCreatePaymentBuilder<TPaymentRest> = () =>
  createSpecializedBuilder({
    name: 'PaymentRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreatePaymentBuilder<TPaymentGraphql> = () =>
  createSpecializedBuilder({
    name: 'PaymentGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TPaymentModel extends TPaymentRest | TPaymentGraphql = TPaymentRest,
>() =>
  createCompatibilityBuilder<TPaymentModel>({
    name: 'PaymentCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TPaymentModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TPaymentModel>,
    },
  });
