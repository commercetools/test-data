import type {
  AssociateRole,
  AssociateRoleDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type {
  TCtpAssociateRole,
  TCtpAssociateRoleDraft,
} from '@/graphql-types';

/**
 * @deprecated Use `TAssociateRoleRest` or `TAssociateRoleGraphql` instead.
 */
export type TAssociateRole = AssociateRole;
export type TAssociateRoleRest = AssociateRole;
export type TAssociateRoleGraphql = TCtpAssociateRole;

/**
 * @deprecated Use `TAssociateRoleDraftRest` or `TAssociateRoleDraftGraphql` instead.
 */
export type TAssociateRoleDraft = AssociateRoleDraft;
export type TAssociateRoleDraftRest = AssociateRoleDraft;
export type TAssociateRoleDraftGraphql = TCtpAssociateRoleDraft;

export type TCreateAssociateRoleBuilder<
  TModel extends
    | TAssociateRoleRest
    | TAssociateRoleGraphql
    | TAssociateRoleDraftRest
    | TAssociateRoleDraftGraphql,
> = () => TBuilder<TModel>;
