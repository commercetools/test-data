import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeNestedTypeBuilder,
  TAttributeNestedTypeGraphql,
  TAttributeNestedTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeNestedTypeBuilder<
  TAttributeNestedTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeNestedTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeNestedTypeBuilder<
  TAttributeNestedTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeNestedTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
