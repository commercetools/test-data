import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateProjectBuilder,
  TProjectGraphql,
  TProjectRest,
} from './types';

export const RestModelBuilder: TCreateProjectBuilder<TProjectRest> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: restFieldsConfig,
    type: 'rest',
    name: 'ProjectRestBuilder',
  });

export const GraphqlModelBuilder: TCreateProjectBuilder<TProjectGraphql> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: graphqlFieldsConfig,
    type: 'graphql',
    name: 'ProjectGraphqlBuilder',
  });

export const CompatProjectModelBuilder = <
  TProjectModel extends TProjectRest | TProjectGraphql = TProjectRest,
>() =>
  createCompatibilityBuilder<TProjectModel>({
    name: 'ProjectCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProjectModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TProjectModel>,
    },
  });
