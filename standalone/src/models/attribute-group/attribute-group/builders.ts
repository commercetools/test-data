import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TAttributeGroupRest,
  TAttributeGroupGraphql,
  TCreateAttributeGroupBuilder,
} from './types';

export const RestModelBuilder: TCreateAttributeGroupBuilder<
  TAttributeGroupRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeGroupRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeGroupBuilder<
  TAttributeGroupGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeGroupGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeGroupModel extends
    | TAttributeGroupRest
    | TAttributeGroupGraphql = TAttributeGroupRest,
>() =>
  createCompatibilityBuilder<TAttributeGroupModel>({
    name: 'AttributeGroupCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeGroupModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TAttributeGroupModel>,
    },
  });
