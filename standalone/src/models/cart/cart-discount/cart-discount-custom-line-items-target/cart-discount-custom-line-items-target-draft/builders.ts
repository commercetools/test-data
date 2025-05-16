import { createSpecializedBuilder } from '@/core';
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
