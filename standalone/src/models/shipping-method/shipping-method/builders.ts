import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateShippingMethodBuilder,
  TShippingMethodRest,
  TShippingMethodGraphql,
} from './types';

// REST shipping method builder
export const RestModelBuilder: TCreateShippingMethodBuilder<
  TShippingMethodRest
> = () =>
  createSpecializedBuilder({
    name: 'ShippingMethodRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

// GraphQL shipping method builder
export const GraphqlModelBuilder: TCreateShippingMethodBuilder<
  TShippingMethodGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingMethodGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

// Compatibility builder for backwards compatibility
export const CompatModelBuilder = <
  TShippingMethodModel extends
    | TShippingMethodRest
    | TShippingMethodGraphql = TShippingMethodRest,
>() =>
  createCompatibilityBuilder<TShippingMethodModel>({
    name: 'ShippingMethodCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TShippingMethodModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TShippingMethodModel>,
    },
  });
