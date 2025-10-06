import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCartScorePriceTierBuilder,
  TCartScorePriceTierGraphql,
  TCartScorePriceTierRest,
} from './types';

export const RestModelBuilder: TCreateCartScorePriceTierBuilder<
  TCartScorePriceTierRest
> = () =>
  createSpecializedBuilder({
    name: 'ShippingRatePriceTierRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCartScorePriceTierBuilder<
  TCartScorePriceTierGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ShippingRatePriceTierGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
