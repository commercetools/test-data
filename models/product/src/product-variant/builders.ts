import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductVariantBuilder,
  TProductVariantGraphql,
  TProductVariantRest,
} from './types';

export const RestModelBuilder: TCreateProductVariantBuilder<
  TProductVariantRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductVariantBuilder<
  TProductVariantGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatProductVariantModelBuilder = <
  TProductVariantModel extends
    | TProductVariantRest
    | TProductVariantGraphql = TProductVariantRest,
>() =>
  createCompatibilityBuilder<TProductVariantModel>({
    name: 'ProductVariantCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductVariantModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TProductVariantModel>,
    },
  });
