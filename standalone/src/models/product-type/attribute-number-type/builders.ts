import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeNumberTypeBuilder,
  TAttributeNumberTypeGraphql,
  TAttributeNumberTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeNumberTypeBuilder<
  TAttributeNumberTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeNumberTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeNumberTypeBuilder<
  TAttributeNumberTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeNumberTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeNumberTypeModel extends
    | TAttributeNumberTypeRest
    | TAttributeNumberTypeGraphql = TAttributeNumberTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeNumberTypeModel>({
    name: 'AttributeNumberTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeNumberTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeNumberTypeModel>,
    },
  });
