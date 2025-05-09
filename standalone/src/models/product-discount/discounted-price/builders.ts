import { createSpecializedBuilder } from '../../../core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDiscountedPriceBuilder,
  TDiscountedPriceGraphql,
  TDiscountedPriceRest,
} from './types';

export const RestModelBuilder: TCreateDiscountedPriceBuilder<
  TDiscountedPriceRest
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedPriceRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDiscountedPriceBuilder<
  TDiscountedPriceGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DiscountedPriceGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
