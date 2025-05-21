import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeTextTypeBuilder,
  TAttributeTextTypeGraphql,
  TAttributeTextTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeTextTypeBuilder<
  TAttributeTextTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeTextTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeTextTypeBuilder<
  TAttributeTextTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeTextTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeTextTypeModel extends
    | TAttributeTextTypeRest
    | TAttributeTextTypeGraphql = TAttributeTextTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeTextTypeModel>({
    name: 'AttributeTextTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeTextTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeTextTypeModel>,
    },
  });
