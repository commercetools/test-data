import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProductTypeBuilder,
  TProductTypeGraphql,
  TProductTypeRest,
} from './types';

export const RestModelBuilder: TCreateProductTypeBuilder<
  TProductTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'ProductTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateProductTypeBuilder<
  TProductTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ProductTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TProductTypeModel extends
    | TProductTypeRest
    | TProductTypeGraphql = TProductTypeRest,
>() =>
  createCompatibilityBuilder<TProductTypeModel>({
    name: 'ProductTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductTypeModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TProductTypeModel>,
    },
  });
