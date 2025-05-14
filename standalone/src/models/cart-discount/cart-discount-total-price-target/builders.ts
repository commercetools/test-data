import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

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
