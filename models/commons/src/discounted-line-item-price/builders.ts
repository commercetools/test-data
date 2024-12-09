import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDiscountedLineItemPriceBuilder,
  TDiscountedLineItemPriceGraphql,
  TDiscountedLineItemPriceRest,
} from './types';

export const RestModelBuilder: TCreateDiscountedLineItemPriceBuilder<
  TDiscountedLineItemPriceRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedLineItemPriceRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountedLineItemPriceBuilder<
  TDiscountedLineItemPriceGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedLineItemPriceGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
