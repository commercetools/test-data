import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type { TCreateTeamBuilder, TTeamGraphql, TTeamRest } from './types';

export const RestModelBuilder: TCreateTeamBuilder<TTeamRest> = () =>
  createSpecializedBuilder({
    name: 'TeamRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTeamBuilder<TTeamGraphql> = () =>
  createSpecializedBuilder({
    name: 'TeamGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatTeamModelBuilder = <
  TTeamModel extends TTeamRest | TTeamGraphql = TTeamRest,
>() =>
  createCompatibilityBuilder<TTeamModel>({
    name: 'TeamCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TTeamModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TTeamModel>,
    },
  });
