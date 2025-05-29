import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeSetTypeBuilder,
  TAttributeSetTypeGraphql,
  TAttributeSetTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeSetTypeBuilder<
  TAttributeSetTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeSetTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeSetTypeBuilder<
  TAttributeSetTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeSetTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeSetTypeModel extends
    | TAttributeSetTypeRest
    | TAttributeSetTypeGraphql = TAttributeSetTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeSetTypeModel>({
    name: 'AttributeSetTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeSetTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeSetTypeModel>,
    },
  });
