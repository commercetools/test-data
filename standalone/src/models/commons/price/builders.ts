import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type { TPriceRest, TPriceGraphql, TCreatePriceBuilder } from './types';

export const RestModelBuilder: TCreatePriceBuilder<TPriceRest> = () =>
  createSpecializedBuilder({
    name: 'PriceRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreatePriceBuilder<TPriceGraphql> = () =>
  createSpecializedBuilder({
    name: 'PriceGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TPriceModel extends TPriceRest | TPriceGraphql = TPriceRest,
>() =>
  createCompatibilityBuilder<TPriceModel>({
    name: 'PriceCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TPriceModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TPriceModel>,
    },
  });
