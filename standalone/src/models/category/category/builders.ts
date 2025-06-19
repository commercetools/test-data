import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type {
  TCreateCategoryBuilder,
  TCategoryGraphql,
  TCategoryRest,
} from './types';

export const GraphqlModelBuilder: TCreateCategoryBuilder<
  TCategoryGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CategoryGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const RestModelBuilder: TCreateCategoryBuilder<TCategoryRest> = () =>
  createSpecializedBuilder({
    name: 'CategoryRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const CompatModelBuilder = <
  TCategoryModel extends TCategoryRest | TCategoryGraphql = TCategoryRest,
>() =>
  createCompatibilityBuilder<TCategoryModel>({
    name: 'CategoryCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCategoryModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TCategoryModel>,
    },
  });
