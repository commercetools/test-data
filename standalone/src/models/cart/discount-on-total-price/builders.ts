import { createSpecializedBuilder } from '../../../core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDiscountOnTotalPriceBuilder,
  TDiscountOnTotalPriceGraphql,
  TDiscountOnTotalPriceRest,
} from './types';

export const RestModelBuilder: TCreateDiscountOnTotalPriceBuilder<
  TDiscountOnTotalPriceRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountOnTotalPriceRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountOnTotalPriceBuilder<
  TDiscountOnTotalPriceGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountOnTotalPriceGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
