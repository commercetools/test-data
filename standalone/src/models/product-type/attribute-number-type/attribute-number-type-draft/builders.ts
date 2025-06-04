import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateAttributeNumberTypeBuilder,
  TAttributeNumberTypeDraftGraphql,
  TAttributeNumberTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeNumberTypeBuilder<
  TAttributeNumberTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeNumberTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeNumberTypeBuilder<
  TAttributeNumberTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeNumberTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeNumberTypeModel extends
    | TAttributeNumberTypeDraftRest
    | TAttributeNumberTypeDraftGraphql = TAttributeNumberTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeNumberTypeModel>({
    name: 'AttributeNumberTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeNumberTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeNumberTypeModel>,
    },
  });
