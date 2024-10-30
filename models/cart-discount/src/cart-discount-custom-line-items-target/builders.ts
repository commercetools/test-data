import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCartDiscountCustomLineItemsTargetRest,
  TCartDiscountCustomLineItemsTargetGraphql,
} from './types';

export const RestModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountCustomLineItemsTargetRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountCustomLineItemsTargetGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TCartDiscountCustomLineItemsTargetModel extends
    | TCartDiscountCustomLineItemsTargetRest
    | TCartDiscountCustomLineItemsTargetGraphql = TCartDiscountCustomLineItemsTargetRest,
>() =>
  createCompatibilityBuilder<TCartDiscountCustomLineItemsTargetModel>({
    name: 'CartDiscountCustomLineItemsTargetCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCartDiscountCustomLineItemsTargetModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCartDiscountCustomLineItemsTargetModel>,
    },
  });
