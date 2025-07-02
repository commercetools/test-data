import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateStateBuilder,
  TStateDraftGraphql,
  TStateDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateStateBuilder<TStateDraftRest> = () =>
  createSpecializedBuilder({
    name: 'StateDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateStateBuilder<
  TStateDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'StateDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TStateDraftModel extends
    | TStateDraftRest
    | TStateDraftGraphql = TStateDraftRest,
>() =>
  createCompatibilityBuilder<TStateDraftModel>({
    name: 'StateDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TStateDraftModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TStateDraftModel>,
    },
  });
