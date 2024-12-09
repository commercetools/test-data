import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateTaxPortionBuilder,
  TTaxPortionGraphql,
  TTaxPortionRest,
} from './types';

export const RestModelBuilder: TCreateTaxPortionBuilder<TTaxPortionRest> = () =>
  createSpecializedBuilder({
    name: 'TaxPortionRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTaxPortionBuilder<
  TTaxPortionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'TaxPortionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
