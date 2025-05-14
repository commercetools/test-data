import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeDateTypeBuilder,
  TAttributeDateTypeGraphql,
  TAttributeDateTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeDateTypeBuilder<
  TAttributeDateTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDateTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeDateTypeBuilder<
  TAttributeDateTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDateTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeDateTypeModel extends
    | TAttributeDateTypeRest
    | TAttributeDateTypeGraphql = TAttributeDateTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeDateTypeModel>({
    name: 'AttributeDateTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeDateTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeDateTypeModel>,
    },
  });
