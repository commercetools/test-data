import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../../core';
import type {
  TCreateAttributeMoneyTypeBuilder,
  TAttributeMoneyTypeDraftGraphql,
  TAttributeMoneyTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeMoneyTypeBuilder<
  TAttributeMoneyTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeMoneyTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeMoneyTypeBuilder<
  TAttributeMoneyTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeMoneyTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeMoneyTypeModel extends
    | TAttributeMoneyTypeDraftRest
    | TAttributeMoneyTypeDraftGraphql = TAttributeMoneyTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeMoneyTypeModel>({
    name: 'AttributeMoneyTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeMoneyTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeMoneyTypeModel>,
    },
  });
