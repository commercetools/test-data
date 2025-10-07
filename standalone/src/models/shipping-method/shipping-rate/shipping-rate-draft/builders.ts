import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TCreateShippingRateBuilder,
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateShippingRateBuilder<
  TShippingRateDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ShippingRateDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateShippingRateBuilder<
  TShippingRateDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingRateDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TShippingRateDraftModel extends
    | TShippingRateDraftRest
    | TShippingRateDraftGraphql = TShippingRateDraftRest,
>() =>
  createCompatibilityBuilder<TShippingRateDraftModel>({
    name: 'ShippingRateDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TShippingRateDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TShippingRateDraftModel>,
    },
  });
