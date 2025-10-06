import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCartClassificationPriceTierBuilder,
  TCartClassificationPriceTierGraphql,
  TCartClassificationPriceTierRest,
} from './types';

export const RestModelBuilder: TCreateCartClassificationPriceTierBuilder<
  TCartClassificationPriceTierRest
> = () =>
  createSpecializedBuilder({
    name: 'CartClassificationPriceTierRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCartClassificationPriceTierBuilder<
  TCartClassificationPriceTierGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CartClassificationPriceTierGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
