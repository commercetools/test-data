import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import {
  TAssociateRoleDraftRest,
  TAssociateRoleDraftGraphql,
  TCreateAssociateRoleBuilder,
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

export const CompatAssociateRoleDraftBuilder = <
  TModel extends
    | TAssociateRoleDraftRest
    | TAssociateRoleDraftGraphql = TAssociateRoleDraftRest,
>() =>
  createCompatibilityBuilder<TModel>({
    name: 'AssociateRoleDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TModel>,
    },
  });
