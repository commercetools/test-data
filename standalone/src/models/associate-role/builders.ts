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
  TAssociateRoleModel extends
    | TAssociateRoleRest
    | TAssociateRoleGraphql = TAssociateRoleRest,
>() =>
  createCompatibilityBuilder<TAssociateRoleModel>({
    name: 'AssociateRoleCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAssociateRoleModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TAssociateRoleModel>,
    },
  });
