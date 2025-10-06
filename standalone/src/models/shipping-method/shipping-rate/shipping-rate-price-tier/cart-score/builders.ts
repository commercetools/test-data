import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCartScorePriceTierBuilder,
  TCartScorePriceTierGraphql,
  TCartScorePriceTierRest,
} from './types';

export const RestModelBuilder: TCartScorePriceTierBuilder<
  TCartScorePriceTierRest
> = () =>
  createSpecializedBuilder({
    name: 'ShippingRatePriceTierRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCartScorePriceTierBuilder<
  TCartScorePriceTierGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingRatePriceTierGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
