import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeEnumTypeBuilder,
  TAttributeEnumTypeGraphql,
  TAttributeEnumTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeEnumTypeBuilder<
  TAttributeEnumTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeEnumTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeEnumTypeBuilder<
  TAttributeEnumTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeEnumTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeEnumTypeModel extends
    | TAttributeEnumTypeRest
    | TAttributeEnumTypeGraphql = TAttributeEnumTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeEnumTypeModel>({
    name: 'AttributeEnumTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeEnumTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeEnumTypeModel>,
    },
  });
