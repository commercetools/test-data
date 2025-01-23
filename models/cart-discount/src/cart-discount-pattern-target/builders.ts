import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCartDiscountPatternTargetBuilder,
  TCartDiscountPatternTargetGraphql,
  TCartDiscountPatternTargetRest,
} from './types';

export const RestModelBuilder: TCreateCartDiscountPatternTargetBuilder<
  TCartDiscountPatternTargetRest
> = () =>
  createSpecializedBuilder({
    name: 'CartDiscountPatternTargetRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCartDiscountPatternTargetBuilder<
  TCartDiscountPatternTargetGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CartDiscountPatternTargetGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
