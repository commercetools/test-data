import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import type {
  TCreateAttributeDateTypeBuilder,
  TAttributeDateTypeDraftGraphql,
  TAttributeDateTypeDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributeDateTypeBuilder<
  TAttributeDateTypeDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDateTypeDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributeDateTypeBuilder<
  TAttributeDateTypeDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributeDateTypeDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributeDateTypeDraftModel extends
    | TAttributeDateTypeDraftRest
    | TAttributeDateTypeDraftGraphql = TAttributeDateTypeDraftRest,
>() =>
  createCompatibilityBuilder<TAttributeDateTypeDraftModel>({
    name: 'AttributeDateTypeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributeDateTypeDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributeDateTypeDraftModel>,
    },
  });
