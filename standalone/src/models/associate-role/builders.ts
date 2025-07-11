import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TAssociateRoleRest,
  TAssociateRoleGraphql,
  TCreateAssociateRoleBuilder,
} from './types';

export const RestModelBuilder: TCreateAssociateRoleBuilder<
  TAssociateRoleRest
> = () =>
  createSpecializedBuilder({
    name: 'AssociateRoleRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAssociateRoleBuilder<
  TAssociateRoleGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AssociateRoleGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TModel extends
    | TAssociateRoleRest
    | TAssociateRoleGraphql = TAssociateRoleRest,
>() =>
  createCompatibilityBuilder<TModel>({
    name: 'AssociateRoleCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TModel>,
    },
  });
