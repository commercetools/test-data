import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateProductTypeBuilder,
  TProductTypeDraftGraphql,
  TProductTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateProductTypeBuilder<
  TProductTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductTypeBuilder<
  TProductTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TProductTypeDraftModel extends
    | TProductTypeDraftRest
    | TProductTypeDraftGraphql = TProductTypeDraftRest,
>() =>
  createCompatibilityBuilder<TProductTypeDraftModel>({
    name: 'ProductTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductTypeDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TProductTypeDraftModel>,
    },
  });
