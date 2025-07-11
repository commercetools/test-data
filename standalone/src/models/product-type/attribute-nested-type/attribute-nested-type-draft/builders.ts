import { createSpecializedBuilder } from '@/core';
import type {
  TCreateAttributeNestedTypeBuilder,
  TAttributeNestedTypeDraftGraphql,
  TAttributeNestedTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeNestedTypeBuilder<
  TAttributeNestedTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeNestedTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeNestedTypeBuilder<
  TAttributeNestedTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeNestedTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
