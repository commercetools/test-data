import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../../core';
import type {
  TCreateAttributeLocalizedEnumTypeBuilder,
  TAttributeLocalizedEnumTypeDraftGraphql,
  TAttributeLocalizedEnumTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeLocalizedEnumTypeBuilder<
  TAttributeLocalizedEnumTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizedEnumTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeLocalizedEnumTypeBuilder<
  TAttributeLocalizedEnumTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizedEnumTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeLocalizedEnumTypeModel extends
    | TAttributeLocalizedEnumTypeDraftRest
    | TAttributeLocalizedEnumTypeDraftGraphql = TAttributeLocalizedEnumTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeLocalizedEnumTypeModel>({
    name: 'AttributeLocalizedEnumTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeLocalizedEnumTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeLocalizedEnumTypeModel>,
    },
  });
