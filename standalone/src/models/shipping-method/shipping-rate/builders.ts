import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TShippingRateBuilder,
  TShippingRateGraphql,
  TShippingRateRest,
} from './types';

export const RestModelBuilder: TShippingRateBuilder<TShippingRateRest> = () =>
  createSpecializedBuilder({
    name: 'ShippingRateRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TShippingRateBuilder<
  TShippingRateGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingRateGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
