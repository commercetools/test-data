import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeBooleanTypeBuilder,
  TAttributeBooleanTypeGraphql,
  TAttributeBooleanTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeBooleanTypeBuilder<
  TAttributeBooleanTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeBooleanTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeBooleanTypeBuilder<
  TAttributeBooleanTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeBooleanTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeBooleanTypeModel extends
    | TAttributeBooleanTypeRest
    | TAttributeBooleanTypeGraphql = TAttributeBooleanTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeBooleanTypeModel>({
    name: 'AttributeBooleanTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeBooleanTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeBooleanTypeModel>,
    },
  });
