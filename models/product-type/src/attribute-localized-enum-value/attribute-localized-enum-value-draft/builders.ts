import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import type {
  TCreateAttributeLocalizedEnumValueBuilder,
  TAttributeLocalizedEnumValueDraftGraphql,
  TAttributeLocalizedEnumValueDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeLocalizedEnumValueBuilder<
  TAttributeLocalizedEnumValueDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizedEnumValueDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeLocalizedEnumValueBuilder<
  TAttributeLocalizedEnumValueDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeLocalizedEnumValueDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeLocalizedEnumValueDraftModel extends
    | TAttributeLocalizedEnumValueDraftRest
    | TAttributeLocalizedEnumValueDraftGraphql = TAttributeLocalizedEnumValueDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeLocalizedEnumValueDraftModel>({
    name: 'AttributeLocalizedEnumValueDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeLocalizedEnumValueDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeLocalizedEnumValueDraftModel>,
    },
  });
