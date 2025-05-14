import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../../core';
import type {
  TCreateAttributeLocalizableTextTypeBuilder,
  TAttributeLocalizableTextTypeDraftGraphql,
  TAttributeLocalizableTextTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeLocalizableTextTypeBuilder<
  TAttributeLocalizableTextTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizableTextTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeLocalizableTextTypeBuilder<
  TAttributeLocalizableTextTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizableTextTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeLocalizableTextTypeModel extends
    | TAttributeLocalizableTextTypeDraftRest
    | TAttributeLocalizableTextTypeDraftGraphql = TAttributeLocalizableTextTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeLocalizableTextTypeModel>({
    name: 'AttributeLocalizableTextTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeLocalizableTextTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeLocalizableTextTypeModel>,
    },
  });
