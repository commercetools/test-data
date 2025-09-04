import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TShippingRateDraftBuilder,
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
} from './types';

export const RestModelBuilder: TShippingRateDraftBuilder<
  TShippingRateDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ShippingRateDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TShippingRateDraftBuilder<
  TShippingRateDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingRateDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
