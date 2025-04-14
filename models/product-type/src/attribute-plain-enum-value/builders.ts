import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributePlainEnumValueBuilder,
  TAttributePlainEnumValueGraphql,
  TAttributePlainEnumValueRest,
} from './types';

export const RestModelBuilder: TCreateAttributePlainEnumValueBuilder<
  TAttributePlainEnumValueRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributelainEnumValueRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributePlainEnumValueBuilder<
  TAttributePlainEnumValueGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributelainEnumValueGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributePlainEnumValueModel extends
    | TAttributePlainEnumValueRest
    | TAttributePlainEnumValueGraphql = TAttributePlainEnumValueRest,
>() =>
  createCompatibilityBuilder<TAttributePlainEnumValueModel>({
    name: 'AttributelainEnumValueCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributePlainEnumValueModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributePlainEnumValueModel>,
    },
  });
