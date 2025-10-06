import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCartClassificationPriceTierBuilder,
  TCartClassificationPriceTierGraphql,
  TCartClassificationPriceTierRest,
} from './types';

export const RestModelBuilder: TCartClassificationPriceTierBuilder<
  TCartClassificationPriceTierRest
> = () =>
  createSpecializedBuilder({
    name: 'CartClassificationPriceTierRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCartClassificationPriceTierBuilder<
  TCartClassificationPriceTierGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CartClassificationPriceTierGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
