import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateAssociateRoleBuilder,
  TAssociateRoleDraftRest,
  TAssociateRoleDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAssociateRoleBuilder<
  TAssociateRoleDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AssociateRoleDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAssociateRoleBuilder<
  TAssociateRoleDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AssociateRoleDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAssociateRoleDraftModel extends
    | TAssociateRoleDraftRest
    | TAssociateRoleDraftGraphql = TAssociateRoleDraftRest,
>() =>
  createCompatibilityBuilder<TAssociateRoleDraftModel>({
    name: 'AssociateRoleDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAssociateRoleDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAssociateRoleDraftModel>,
    },
  });
