import type {
  AssociateRole,
  AssociateRoleDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpAssociateRole, TCtpAssociateRoleDraft } from '@/graphql-types';

// Compatibility types
/**
 * @deprecated use `TAssociateRoleRest` or `TAssociateRoleGraphql` instead
 */
export type TAssociateRole = AssociateRole;
/**
 * @deprecated use `TAssociateRoleDraftRest` or `TAssociateRoleDraftGraphql` instead
 */
export type TAssociateRoleDraft = AssociateRoleDraft;

// REST types
export type TAssociateRoleRest = AssociateRole;
export type TAssociateRoleDraftRest = AssociateRoleDraft;

// GraphQL types
export type TAssociateRoleGraphql = TCtpAssociateRole;
export type TAssociateRoleDraftGraphql = TCtpAssociateRoleDraft;

// Builder type
export type TCreateAssociateRoleBuilder<
  TAssociateRoleModel extends
    | TAssociateRoleRest
    | TAssociateRoleGraphql
    | TAssociateRoleDraftRest
    | TAssociateRoleDraftGraphql,
> = () => TBuilder<TAssociateRoleModel>;
