import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
  TCreateOrderBuilder,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateOrderBuilder<
  TOrderFromQuoteDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'OrderFromQuoteDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<
  TOrderFromQuoteDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'OrderFromQuoteDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatOrderFromQuoteDraftModelBuilder = <
  TOrderFromQuoteDraftModel extends
    | TOrderFromQuoteDraftRest
    | TOrderFromQuoteDraftGraphql = TOrderFromQuoteDraftRest,
>() =>
  createCompatibilityBuilder<TOrderFromQuoteDraftModel>({
    name: 'OrderFromQuoteDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TOrderFromQuoteDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TOrderFromQuoteDraftModel>,
    },
  });
