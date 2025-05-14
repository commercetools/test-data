import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeReferenceTypeBuilder,
  TAttributeReferenceTypeGraphql,
  TAttributeReferenceTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeReferenceTypeBuilder<
  TAttributeReferenceTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeReferenceTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeReferenceTypeBuilder<
  TAttributeReferenceTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeReferenceTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeReferenceTypeModel extends
    | TAttributeReferenceTypeRest
    | TAttributeReferenceTypeGraphql = TAttributeReferenceTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeReferenceTypeModel>({
    name: 'AttributeReferenceTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeReferenceTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeReferenceTypeModel>,
    },
  });
