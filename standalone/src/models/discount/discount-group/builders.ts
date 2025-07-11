import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDiscountGroupBuilder,
  TDiscountGroupGraphql,
  TDiscountGroupRest,
} from './types';

export const RestModelBuilder: TCreateDiscountGroupBuilder<
  TDiscountGroupRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountGroupRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountGroupBuilder<
  TDiscountGroupGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountGroupGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
