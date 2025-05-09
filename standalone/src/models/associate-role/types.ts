import type {
  AssociateRole,
  AssociateRoleDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../core';

//AssociateRoleDraft
export type TAssociateRoleDraft = AssociateRoleDraft;
export type TAssociateRoleDraftBuilder = TBuilder<TAssociateRoleDraft>;
export type TCreateAssociateRoleDraftBuilder = () => TAssociateRoleDraftBuilder;
export type TAssociateRoleDraftGraphql = TAssociateRoleDraft;

//AssociateRole
export type TAssociateRole = AssociateRole;
export type TAssociateRoleBuilder = TBuilder<TAssociateRole>;
export type TCreateAssociateRoleBuilder = () => TAssociateRoleBuilder;
export type TAssociateRoleGraphql = TAssociateRole & {
  __typename: 'AssociateRole';
};
