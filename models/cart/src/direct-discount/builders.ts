import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDirectDiscountBuilder,
  TDirectDiscountGraphql,
  TDirectDiscountRest,
} from './types';

export const RestModelBuilder: TCreateDirectDiscountBuilder<
  TDirectDiscountRest
> = () =>
  createSpecializedBuilder({
    name: 'DirectDiscountRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDirectDiscountBuilder<
  TDirectDiscountGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DirectDiscountGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
