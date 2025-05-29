import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateAttributeEnumTypeBuilder,
  TAttributeEnumTypeDraftGraphql,
  TAttributeEnumTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeEnumTypeBuilder<
  TAttributeEnumTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeEnumTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeEnumTypeBuilder<
  TAttributeEnumTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeEnumTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeEnumTypeDraftModel extends
    | TAttributeEnumTypeDraftRest
    | TAttributeEnumTypeDraftGraphql = TAttributeEnumTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeEnumTypeDraftModel>({
    name: 'AttributeEnumTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeEnumTypeDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeEnumTypeDraftModel>,
    },
  });
