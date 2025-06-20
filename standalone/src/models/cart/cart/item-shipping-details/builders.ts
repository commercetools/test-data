import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateItemShippingDetailsBuilder,
  TItemShippingDetailsGraphql,
  TItemShippingDetailsRest,
} from './types';

export const RestModelBuilder: TCreateItemShippingDetailsBuilder<
  TItemShippingDetailsRest
> = () =>
  createSpecializedBuilder({
    name: 'ItemShippingDetailsRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateItemShippingDetailsBuilder<
  TItemShippingDetailsGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ItemShippingDetailsGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
