import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeMoneyTypeBuilder,
  TAttributeMoneyTypeGraphql,
  TAttributeMoneyTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeMoneyTypeBuilder<
  TAttributeMoneyTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeMoneyTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeMoneyTypeBuilder<
  TAttributeMoneyTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeMoneyTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeMoneyTypeModel extends
    | TAttributeMoneyTypeRest
    | TAttributeMoneyTypeGraphql = TAttributeMoneyTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeMoneyTypeModel>({
    name: 'AttributeMoneyTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeMoneyTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeMoneyTypeModel>,
    },
  });
