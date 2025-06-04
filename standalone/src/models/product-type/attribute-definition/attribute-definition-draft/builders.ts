import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateAttributeDefinitionBuilder,
  TAttributeDefinitionDraftGraphql,
  TAttributeDefinitionDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeDefinitionBuilder<
  TAttributeDefinitionDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDefinitionDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeDefinitionBuilder<
  TAttributeDefinitionDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDefinitionDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeDefinitionModel extends
    | TAttributeDefinitionDraftRest
    | TAttributeDefinitionDraftGraphql = TAttributeDefinitionDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeDefinitionModel>({
    name: 'AttributeDefinitionDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeDefinitionModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeDefinitionModel>,
    },
  });
