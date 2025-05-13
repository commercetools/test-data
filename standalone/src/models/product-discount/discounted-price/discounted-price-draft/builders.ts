import { createSpecializedBuilder } from '@/core';
import type {
  TCreateDiscountedPriceBuilder,
  TDiscountedPriceDraftGraphql,
  TDiscountedPriceDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateDiscountedPriceBuilder<
  TDiscountedPriceDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedPriceDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountedPriceBuilder<
  TDiscountedPriceDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedPriceDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
