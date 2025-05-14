import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDiscountedLineItemPriceForQuantityBuilder,
  TDiscountedLineItemPriceForQuantityGraphql,
  TDiscountedLineItemPriceForQuantityRest,
} from './types';

export const RestModelBuilder: TCreateDiscountedLineItemPriceForQuantityBuilder<
  TDiscountedLineItemPriceForQuantityRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedLineItemPriceForQuantityRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountedLineItemPriceForQuantityBuilder<
  TDiscountedLineItemPriceForQuantityGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedLineItemPriceForQuantityGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
