import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../../core';
import type {
  TCreateAttributeDateTimeTypeBuilder,
  TAttributeDateTimeTypeDraftGraphql,
  TAttributeDateTimeTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeDateTimeTypeBuilder<
  TAttributeDateTimeTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDateTimeTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeDateTimeTypeBuilder<
  TAttributeDateTimeTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDateTimeTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeDateTimeTypeDraftModel extends
    | TAttributeDateTimeTypeDraftRest
    | TAttributeDateTimeTypeDraftGraphql = TAttributeDateTimeTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeDateTimeTypeDraftModel>({
    name: 'AttributeDateTimeTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeDateTimeTypeDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeDateTimeTypeDraftModel>,
    },
  });
