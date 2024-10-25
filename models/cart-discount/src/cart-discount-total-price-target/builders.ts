import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCartDiscountTotalPriceTargetGraphql,
  TCartDiscountTotalPriceTargetRest,
} from './types';

export const RestModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountTotalPriceTargetRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountTotalPriceTargetGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TCartDiscountTotalPriceTargetModel extends
    | TCartDiscountTotalPriceTargetRest
    | TCartDiscountTotalPriceTargetGraphql = TCartDiscountTotalPriceTargetRest,
>() =>
  createCompatibilityBuilder<TCartDiscountTotalPriceTargetModel>({
    name: 'CartDiscountTotalPriceTargetCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCartDiscountTotalPriceTargetModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCartDiscountTotalPriceTargetModel>,
    },
  });
