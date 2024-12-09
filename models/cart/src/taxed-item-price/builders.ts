import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateTaxedItemPriceBuilder,
  TTaxedItemPriceGraphql,
  TTaxedItemPriceRest,
} from './types';

export const RestModelBuilder: TCreateTaxedItemPriceBuilder<
  TTaxedItemPriceRest
> = () =>
  createSpecializedBuilder({
    name: 'TaxedItemPriceRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTaxedItemPriceBuilder<
  TTaxedItemPriceGraphql
> = () =>
  createSpecializedBuilder({
    name: 'TaxedItemPriceGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
