import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import { TTaxRateGraphql, TTaxRateRest, TCreateTaxRateBuilder } from './types';

export const RestModelBuilder: TCreateTaxRateBuilder<TTaxRateRest> = () =>
  createSpecializedBuilder({
    name: 'TaxRateRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTaxRateBuilder<TTaxRateGraphql> = () =>
  createSpecializedBuilder({
    name: 'TaxRateGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TCreateTaxRateModel extends TTaxRateRest | TTaxRateGraphql,
>() =>
  createCompatibilityBuilder({
    name: 'CompatTaxRateModelBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateTaxRateModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TCreateTaxRateModel>,
    },
  });
