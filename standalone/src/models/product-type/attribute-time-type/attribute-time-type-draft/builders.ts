import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateAttributeTimeTypeBuilder,
  TAttributeTimeTypeDraftGraphql,
  TAttributeTimeTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeTimeTypeBuilder<
  TAttributeTimeTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeTimeTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeTimeTypeBuilder<
  TAttributeTimeTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeTimeTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeTimeTypeModel extends
    | TAttributeTimeTypeDraftRest
    | TAttributeTimeTypeDraftGraphql = TAttributeTimeTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeTimeTypeModel>({
    name: 'AttributeTimeTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeTimeTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeTimeTypeModel>,
    },
  });
