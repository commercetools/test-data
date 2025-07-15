import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDiscountCodeInfoBuilder,
  TDiscountCodeInfoGraphql,
  TDiscountCodeInfoRest,
} from './types';

export const RestModelBuilder: TCreateDiscountCodeInfoBuilder<
  TDiscountCodeInfoRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountCodeInfoRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountCodeInfoBuilder<
  TDiscountCodeInfoGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountCodeInfoGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
