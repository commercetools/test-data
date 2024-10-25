import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import type {
  TCartDiscountTotalPriceTargetDraftRest,
  TCartDiscountTotalPriceTargetDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountTotalPriceTargetDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder = () =>
  createSpecializedBuilder({
    name: 'CartDiscountTotalPriceTargetDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TCartDiscountTotalPriceTargetModel extends
    | TCartDiscountTotalPriceTargetDraftRest
    | TCartDiscountTotalPriceTargetDraftGraphql = TCartDiscountTotalPriceTargetDraftRest,
>() =>
  createCompatibilityBuilder<TCartDiscountTotalPriceTargetModel>({
    name: 'CartDiscountTotalPriceTargetDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCartDiscountTotalPriceTargetModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCartDiscountTotalPriceTargetModel>,
    },
  });
