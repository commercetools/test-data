import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeLocalizedEnumTypeBuilder,
  TAttributeLocalizedEnumTypeGraphql,
  TAttributeLocalizedEnumTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeLocalizedEnumTypeBuilder<
  TAttributeLocalizedEnumTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizedEnumTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeLocalizedEnumTypeBuilder<
  TAttributeLocalizedEnumTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizedEnumTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeLocalizedEnumTypeModel extends
    | TAttributeLocalizedEnumTypeRest
    | TAttributeLocalizedEnumTypeGraphql = TAttributeLocalizedEnumTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeLocalizedEnumTypeModel>({
    name: 'AttributeLocalizedEnumTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeLocalizedEnumTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeLocalizedEnumTypeModel>,
    },
  });
