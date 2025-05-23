import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeLocalizableTextTypeBuilder,
  TAttributeLocalizableTextTypeGraphql,
  TAttributeLocalizableTextTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeLocalizableTextTypeBuilder<
  TAttributeLocalizableTextTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizableTextTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeLocalizableTextTypeBuilder<
  TAttributeLocalizableTextTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizableTextTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeLocalizableTextTypeModel extends
    | TAttributeLocalizableTextTypeRest
    | TAttributeLocalizableTextTypeGraphql = TAttributeLocalizableTextTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeLocalizableTextTypeModel>({
    name: 'AttributeLocalizableTextTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeLocalizableTextTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeLocalizableTextTypeModel>,
    },
  });
