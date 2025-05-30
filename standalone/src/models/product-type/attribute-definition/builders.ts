import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeDefinitionBuilder,
  TAttributeDefinitionGraphql,
  TAttributeDefinitionRest,
} from './types';

export const RestModelBuilder: TCreateAttributeDefinitionBuilder<
  TAttributeDefinitionRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDefinitionRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeDefinitionBuilder<
  TAttributeDefinitionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDefinitionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeDefinitionModel extends
    | TAttributeDefinitionRest
    | TAttributeDefinitionGraphql = TAttributeDefinitionRest,
>() =>
  createCompatibilityBuilder<TAttributeDefinitionModel>({
    name: 'AttributeDefinitionCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeDefinitionModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeDefinitionModel>,
    },
  });
