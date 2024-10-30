import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCartDiscountMultiBuyCustomLineItemsTargetGraphql,
  TCartDiscountMultiBuyCustomLineItemsTargetRest,
} from './types';

export const RestModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountMultiBuyCustomLineItemsTargetRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountMultiBuyCustomLineItemsTargetGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TCartDiscountMultiBuyCustomLineItemsTargetModel extends
    | TCartDiscountMultiBuyCustomLineItemsTargetRest
    | TCartDiscountMultiBuyCustomLineItemsTargetGraphql = TCartDiscountMultiBuyCustomLineItemsTargetRest,
>() =>
  createCompatibilityBuilder<TCartDiscountMultiBuyCustomLineItemsTargetModel>({
    name: 'CartDiscountMultiBuyCustomLineItemsTargetCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCartDiscountMultiBuyCustomLineItemsTargetModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCartDiscountMultiBuyCustomLineItemsTargetModel>,
    },
  });
