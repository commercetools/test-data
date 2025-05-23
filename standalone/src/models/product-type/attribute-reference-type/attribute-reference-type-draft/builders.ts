import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateAttributeReferenceTypeBuilder,
  TAttributeReferenceTypeDraftGraphql,
  TAttributeReferenceTypeDraftRest,
} from '@/models/product-type/attribute-reference-type/types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeReferenceTypeBuilder<
  TAttributeReferenceTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeReferenceTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeReferenceTypeBuilder<
  TAttributeReferenceTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeReferenceTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeReferenceTypeDraftModel extends
    | TAttributeReferenceTypeDraftRest
    | TAttributeReferenceTypeDraftGraphql = TAttributeReferenceTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeReferenceTypeDraftModel>({
    name: 'AttributeReferenceTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeReferenceTypeDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeReferenceTypeDraftModel>,
    },
  });
