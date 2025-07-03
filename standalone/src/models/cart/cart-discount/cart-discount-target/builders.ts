import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCartDiscountTargetBuilder,
  TCartDiscountTargetGraphql,
  TCartDiscountTargetRest,
} from './types';

export const RestModelBuilder: TCreateCartDiscountTargetBuilder<
  TCartDiscountTargetRest
> = () =>
  createSpecializedBuilder({
    name: 'CartDiscountTargetRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCartDiscountTargetBuilder<
  TCartDiscountTargetGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CartDiscountTargetGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
