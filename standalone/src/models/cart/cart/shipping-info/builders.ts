import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateShippingInfoBuilder,
  TShippingInfoGraphql,
  TShippingInfoRest,
} from './types';

export const RestModelBuilder: TCreateShippingInfoBuilder<
  TShippingInfoRest
> = () =>
  createSpecializedBuilder({
    name: 'ShippingInfoRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateShippingInfoBuilder<
  TShippingInfoGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingInfoGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
