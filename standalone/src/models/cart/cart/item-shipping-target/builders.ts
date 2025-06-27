import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateItemShippingTargetBuilder,
  TItemShippingTargetGraphql,
  TItemShippingTargetRest,
} from './types';

export const RestModelBuilder: TCreateItemShippingTargetBuilder<
  TItemShippingTargetRest
> = () =>
  createSpecializedBuilder({
    name: 'ItemShippingTargetRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateItemShippingTargetBuilder<
  TItemShippingTargetGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ItemShippingTargetGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
