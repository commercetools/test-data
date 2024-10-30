import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import type {
  TCartDiscountCustomLineItemsTargetDraftRest,
  TCartDiscountCustomLineItemsTargetDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountCustomLineItemsTargetDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountCustomLineItemsTargetDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TCartDiscountCustomLineItemsTargetModel extends
    | TCartDiscountCustomLineItemsTargetDraftRest
    | TCartDiscountCustomLineItemsTargetDraftGraphql = TCartDiscountCustomLineItemsTargetDraftRest,
>() =>
  createCompatibilityBuilder<TCartDiscountCustomLineItemsTargetModel>({
    name: 'CartDiscountCustomLineItemsTargetDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCartDiscountCustomLineItemsTargetModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCartDiscountCustomLineItemsTargetModel>,
    },
  });
