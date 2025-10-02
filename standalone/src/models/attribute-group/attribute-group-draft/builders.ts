import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TAttributeGroupDraftGraphql,
  TAttributeGroupDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder = () =>
  createSpecializedBuilder({
    name: 'AttributeGroupDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder = () =>
  createSpecializedBuilder({
    name: 'AttributeGroupDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const AttributeGroupDraftCompatBuilder = <
  TModel extends
    | TAttributeGroupDraftRest
    | TAttributeGroupDraftGraphql = TAttributeGroupDraftRest,
>() =>
  createCompatibilityBuilder<TModel>({
    name: 'AttributeGroupDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TModel>,
    },
  });
