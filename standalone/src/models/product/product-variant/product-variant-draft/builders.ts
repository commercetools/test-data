import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateProductVariantBuilder,
  TProductVariantDraftGraphql,
  TProductVariantDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateProductVariantBuilder<
  TProductVariantDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductVariantBuilder<
  TProductVariantDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductVariantDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatProductVariantModelBuilder = <
  TProductVariantModel extends
    | TProductVariantDraftRest
    | TProductVariantDraftGraphql = TProductVariantDraftRest,
>() =>
  createCompatibilityBuilder<TProductVariantModel>({
    name: 'ProductVariantDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductVariantModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TProductVariantModel>,
    },
  });
