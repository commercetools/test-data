import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateShippingRateBuilder,
  TShippingRateGraphql,
  TShippingRateRest,
} from './types';

export const RestModelBuilder: TCreateShippingRateBuilder<
  TShippingRateRest
> = () =>
  createSpecializedBuilder({
    name: 'ShippingRateRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateShippingRateBuilder<
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
