import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateMethodTaxedPriceBuilder,
  TMethodTaxedPriceGraphql,
  TMethodTaxedPriceRest,
} from './types';

export const RestModelBuilder: TCreateMethodTaxedPriceBuilder<
  TMethodTaxedPriceRest
> = () =>
  createSpecializedBuilder({
    name: 'MethodTaxedPriceRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateMethodTaxedPriceBuilder<
  TMethodTaxedPriceGraphql
> = () =>
  createSpecializedBuilder({
    name: 'MethodTaxedPriceGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
