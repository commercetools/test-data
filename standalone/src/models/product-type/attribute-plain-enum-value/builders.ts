import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../core';
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
    name: 'AttributePlainEnumValueRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributePlainEnumValueBuilder<
  TAttributePlainEnumValueGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributePlainEnumValueGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributePlainEnumValueModel extends
    | TAttributePlainEnumValueRest
    | TAttributePlainEnumValueGraphql = TAttributePlainEnumValueRest,
>() =>
  createCompatibilityBuilder<TAttributePlainEnumValueModel>({
    name: 'AttributePlainEnumValueCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributePlainEnumValueModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributePlainEnumValueModel>,
    },
  });
