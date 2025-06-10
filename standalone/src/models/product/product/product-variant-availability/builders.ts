import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductVariantAvailabilityBuilder,
  TProductVariantAvailabilityGraphql,
  TProductVariantAvailabilityRest,
} from './types';

export const RestModelBuilder: TCreateProductVariantAvailabilityBuilder<
  TProductVariantAvailabilityRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantAvailabilityRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductVariantAvailabilityBuilder<
  TProductVariantAvailabilityGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantAvailabilityGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
