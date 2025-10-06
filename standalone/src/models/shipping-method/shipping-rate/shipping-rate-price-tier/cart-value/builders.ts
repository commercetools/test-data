import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCartValuePriceTierBuilder,
  TCartValuePriceTierGraphql,
  TCartValuePriceTierRest,
} from './types';

export const RestModelBuilder: TCreateCartValuePriceTierBuilder<
  TCartValuePriceTierRest
> = () =>
  createSpecializedBuilder({
    name: 'CartValuePriceTierRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCartValuePriceTierBuilder<
  TCartValuePriceTierGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CartValuePriceTierGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
