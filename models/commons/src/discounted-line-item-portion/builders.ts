import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDiscountedLineItemPortionBuilder,
  TDiscountedLineItemPortionGraphql,
  TDiscountedLineItemPortionRest,
} from './types';

export const RestModelBuilder: TCreateDiscountedLineItemPortionBuilder<
  TDiscountedLineItemPortionRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedLineItemPortionRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountedLineItemPortionBuilder<
  TDiscountedLineItemPortionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedLineItemPortionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
