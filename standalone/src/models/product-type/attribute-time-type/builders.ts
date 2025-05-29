import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeTimeTypeBuilder,
  TAttributeTimeTypeGraphql,
  TAttributeTimeTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeTimeTypeBuilder<
  TAttributeTimeTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeTimeTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeTimeTypeBuilder<
  TAttributeTimeTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeTimeTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeTimeTypeModel extends
    | TAttributeTimeTypeRest
    | TAttributeTimeTypeGraphql = TAttributeTimeTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeTimeTypeModel>({
    name: 'AttributeTimeTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeTimeTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeTimeTypeModel>,
    },
  });
