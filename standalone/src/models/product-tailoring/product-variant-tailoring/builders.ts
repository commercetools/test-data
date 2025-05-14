import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductVariantTailoringBuilder,
  TProductVariantTailoringGraphql,
  TProductVariantTailoringRest,
} from './types';

export const RestModelBuilder: TCreateProductVariantTailoringBuilder<
  TProductVariantTailoringRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantTailoringRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductVariantTailoringBuilder<
  TProductVariantTailoringGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantTailoringGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
