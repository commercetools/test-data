import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
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

export const CompatModelBuilder = <
  TShippingRateModel extends
    | TShippingRateRest
    | TShippingRateGraphql = TShippingRateRest,
>() =>
  createCompatibilityBuilder<TShippingRateModel>({
    name: 'ShippingRateCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TShippingRateModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TShippingRateModel>,
    },
  });
