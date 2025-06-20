import { createSpecializedBuilder } from '@/core';
import type {
  TCreateItemShippingDetailsBuilder,
  TItemShippingDetailsDraftGraphql,
  TItemShippingDetailsDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateItemShippingDetailsBuilder<
  TItemShippingDetailsDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ItemShippingDetailsDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateItemShippingDetailsBuilder<
  TItemShippingDetailsDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ItemShippingDetailsDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
