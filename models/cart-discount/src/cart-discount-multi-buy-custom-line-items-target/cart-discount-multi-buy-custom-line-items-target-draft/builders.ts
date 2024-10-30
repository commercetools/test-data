import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import type {
  TCartDiscountMultiBuyCustomLineItemsTargetDraftRest,
  TCartDiscountMultiBuyCustomLineItemsTargetDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountMultiBuyCustomLineItemsTargetDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountMultiBuyCustomLineItemsTargetDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TCartDiscountMultiBuyCustomLineItemsTargetModel extends
    | TCartDiscountMultiBuyCustomLineItemsTargetDraftRest
    | TCartDiscountMultiBuyCustomLineItemsTargetDraftGraphql = TCartDiscountMultiBuyCustomLineItemsTargetDraftRest,
>() =>
  createCompatibilityBuilder<TCartDiscountMultiBuyCustomLineItemsTargetModel>({
    name: 'CartDiscountMultiBuyCustomLineItemsTargetDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCartDiscountMultiBuyCustomLineItemsTargetModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCartDiscountMultiBuyCustomLineItemsTargetModel>,
    },
  });
