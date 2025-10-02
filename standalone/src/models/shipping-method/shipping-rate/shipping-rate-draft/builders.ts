import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
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
