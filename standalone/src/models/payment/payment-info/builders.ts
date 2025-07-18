import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreatePaymentInfoBuilder,
  TPaymentInfoGraphql,
  TPaymentInfoRest,
} from './types';

export const RestModelBuilder: TCreatePaymentInfoBuilder<
  TPaymentInfoRest
> = () =>
  createSpecializedBuilder({
    name: 'PaymentInfoRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreatePaymentInfoBuilder<
  TPaymentInfoGraphql
> = () =>
  createSpecializedBuilder({
    name: 'PaymentInfoGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
