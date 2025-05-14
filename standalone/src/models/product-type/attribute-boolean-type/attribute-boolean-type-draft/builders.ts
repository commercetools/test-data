import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../../core';
import type {
  TCreateAttributeBooleanTypeBuilder,
  TAttributeBooleanTypeDraftGraphql,
  TAttributeBooleanTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeBooleanTypeBuilder<
  TAttributeBooleanTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeBooleanTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeBooleanTypeBuilder<
  TAttributeBooleanTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeBooleanTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeBooleanTypeModel extends
    | TAttributeBooleanTypeDraftRest
    | TAttributeBooleanTypeDraftGraphql = TAttributeBooleanTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeBooleanTypeModel>({
    name: 'AttributeBooleanTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeBooleanTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeBooleanTypeModel>,
    },
  });
