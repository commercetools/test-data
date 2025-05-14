import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateAttributeDateTimeTypeBuilder,
  TAttributeDateTimeTypeGraphql,
  TAttributeDateTimeTypeRest,
} from './types';

export const RestModelBuilder: TCreateAttributeDateTimeTypeBuilder<
  TAttributeDateTimeTypeRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDateTimeTypeRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeDateTimeTypeBuilder<
  TAttributeDateTimeTypeGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDateTimeTypeGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeDateTimeTypeModel extends
    | TAttributeDateTimeTypeRest
    | TAttributeDateTimeTypeGraphql = TAttributeDateTimeTypeRest,
>() =>
  createCompatibilityBuilder<TAttributeDateTimeTypeModel>({
    name: 'AttributeDateTimeTypeCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeDateTimeTypeModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeDateTimeTypeModel>,
    },
  });
