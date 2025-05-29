import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeLocalizedEnumValueBuilder,
  TAttributeLocalizedEnumValueGraphql,
  TAttributeLocalizedEnumValueRest,
} from './types';

export const RestModelBuilder: TCreateAttributeLocalizedEnumValueBuilder<
  TAttributeLocalizedEnumValueRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizedEnumValueRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeLocalizedEnumValueBuilder<
  TAttributeLocalizedEnumValueGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizedEnumValueGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeLocalizedEnumValueModel extends
    | TAttributeLocalizedEnumValueRest
    | TAttributeLocalizedEnumValueGraphql = TAttributeLocalizedEnumValueRest,
>() =>
  createCompatibilityBuilder<TAttributeLocalizedEnumValueModel>({
    name: 'AttributeLocalizedEnumValueCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeLocalizedEnumValueModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeLocalizedEnumValueModel>,
    },
  });
