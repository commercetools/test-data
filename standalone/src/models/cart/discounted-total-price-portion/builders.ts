import { createSpecializedBuilder } from '../../../core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDiscountedTotalPricePortionBuilder,
  TDiscountedTotalPricePortionGraphql,
  TDiscountedTotalPricePortionRest,
} from './types';

export const RestModelBuilder: TCreateDiscountedTotalPricePortionBuilder<
  TDiscountedTotalPricePortionRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedTotalPricePortionRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountedTotalPricePortionBuilder<
  TDiscountedTotalPricePortionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedTotalPricePortionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
