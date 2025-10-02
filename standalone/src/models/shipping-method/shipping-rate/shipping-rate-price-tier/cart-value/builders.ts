import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCartValuePriceTierBuilder,
  TCartValuePriceTierGraphql,
  TCartValuePriceTierRest,
} from './types';

export const RestModelBuilder: TCartValuePriceTierBuilder<
  TCartValuePriceTierRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantTailoringRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCartValuePriceTierBuilder<
  TCartValuePriceTierGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantTailoringGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
