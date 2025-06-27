import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TOrderFromCartDraftGraphql,
  TOrderFromCartDraftRest,
  TCreateOrderBuilder,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateOrderBuilder<
  TOrderFromCartDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'OrderFromCartDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<
  TOrderFromCartDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'OrderFromCartDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatOrderFromCartDraftModelBuilder = <
  TOrderFromCartDraftModel extends
    | TOrderFromCartDraftRest
    | TOrderFromCartDraftGraphql = TOrderFromCartDraftRest,
>() =>
  createCompatibilityBuilder<TOrderFromCartDraftModel>({
    name: 'OrderFromCartDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TOrderFromCartDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TOrderFromCartDraftModel>,
    },
  });
