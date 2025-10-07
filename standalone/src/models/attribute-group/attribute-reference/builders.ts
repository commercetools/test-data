import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeReferenceBuilder,
  TAttributeReferenceGraphql,
  TAttributeReferenceRest,
} from './types';

export const RestModelBuilder: TCreateAttributeReferenceBuilder<
  TAttributeReferenceRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeReferenceRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeReferenceBuilder<
  TAttributeReferenceGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeReferenceGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
