import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateAttributeTextTypeBuilder,
  TAttributeTextTypeDraftGraphql,
  TAttributeTextTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeTextTypeBuilder<
  TAttributeTextTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeTextTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeTextTypeBuilder<
  TAttributeTextTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeTextTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeTextTypeModel extends
    | TAttributeTextTypeDraftRest
    | TAttributeTextTypeDraftGraphql = TAttributeTextTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeTextTypeModel>({
    name: 'AttributeTextTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeTextTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeTextTypeModel>,
    },
  });
