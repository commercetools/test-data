import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import {
  TTaxRateDraftGraphql,
  TTaxRateDraftRest,
  TCreateTaxRateBuilder,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateTaxRateBuilder<TTaxRateDraftRest> = () =>
  createSpecializedBuilder({
    name: 'TaxRateDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTaxRateBuilder<
  TTaxRateDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'TaxRateDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TCreateTaxRateDraftModel extends TTaxRateDraftRest | TTaxRateDraftGraphql,
>() =>
  createCompatibilityBuilder({
    name: 'CompatTaxRateDraftModelBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateTaxRateDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCreateTaxRateDraftModel>,
    },
  });
