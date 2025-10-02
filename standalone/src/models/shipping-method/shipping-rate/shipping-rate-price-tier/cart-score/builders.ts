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
    name: 'ProductVariantTailoringRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCartScorePriceTierBuilder<
  TCartScorePriceTierGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantTailoringGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
