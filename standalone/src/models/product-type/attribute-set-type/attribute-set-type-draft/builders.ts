import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateAttributeSetTypeBuilder,
  TAttributeSetTypeDraftGraphql,
  TAttributeSetTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeSetTypeBuilder<
  TAttributeSetTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeSetTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeSetTypeBuilder<
  TAttributeSetTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeSetTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeSetTypeModel extends
    | TAttributeSetTypeDraftRest
    | TAttributeSetTypeDraftGraphql = TAttributeSetTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeSetTypeModel>({
    name: 'AttributeSetTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeSetTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeSetTypeModel>,
    },
  });
