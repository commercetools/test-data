import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateMethodTaxRateBuilder,
  TMethodTaxRateGraphql,
  TMethodTaxRateRest,
} from './types';

export const RestModelBuilder: TCreateMethodTaxRateBuilder<
  TMethodTaxRateRest
> = () =>
  createSpecializedBuilder({
    name: 'MethodTaxRateRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateMethodTaxRateBuilder<
  TMethodTaxRateGraphql
> = () =>
  createSpecializedBuilder({
    name: 'MethodTaxRateGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
