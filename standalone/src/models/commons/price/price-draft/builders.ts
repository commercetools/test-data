import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TPriceDraftRest,
  TPriceDraftGraphql,
  TCreatePriceBuilder,
  TPriceRest,
  TPriceGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreatePriceBuilder<TPriceDraftRest> = () =>
  createSpecializedBuilder({
    name: 'PriceDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreatePriceBuilder<
  TPriceDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'PriceDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TPriceModel extends TPriceRest | TPriceGraphql = TPriceRest,
>() =>
  createCompatibilityBuilder<TPriceModel>({
    name: 'PriceDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TPriceModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TPriceModel>,
    },
  });
