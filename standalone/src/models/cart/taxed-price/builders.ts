import { createSpecializedBuilder } from '../../../core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateTaxedPriceBuilder,
  TTaxedPriceGraphql,
  TTaxedPriceRest,
} from './types';

export const RestModelBuilder: TCreateTaxedPriceBuilder<TTaxedPriceRest> = () =>
  createSpecializedBuilder({
    name: 'taxedPriceRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTaxedPriceBuilder<
  TTaxedPriceGraphql
> = () =>
  createSpecializedBuilder({
    name: 'taxedPriceGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
