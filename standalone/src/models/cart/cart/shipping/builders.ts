import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateShippingBuilder,
  TShippingGraphql,
  TShippingRest,
} from './types';

export const RestModelBuilder: TCreateShippingBuilder<TShippingRest> = () =>
  createSpecializedBuilder({
    name: 'ShippingRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateShippingBuilder<
  TShippingGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
