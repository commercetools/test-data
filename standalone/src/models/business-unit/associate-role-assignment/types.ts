import type {
  AssociateRoleKeyReference,
  AssociateRole,
  AssociateRoleAssignment,
  AssociateRoleAssignmentDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TAssociateRoleAssignmentDraft = AssociateRoleAssignmentDraft;
export type TAssociateRoleAssignmentDraftGraphql =
  TAssociateRoleAssignmentDraft;

export type TAssociateRoleAssignmentDefault = Omit<
  AssociateRoleAssignment,
  'associateRole'
> & {
  associateRole: AssociateRole;
};
export type TAssociateRoleAssignmentRest = AssociateRoleAssignment;
export type TAssociateRoleAssignmentGraphql =
  TAssociateRoleAssignmentDefault & {
    associateRoleRef: AssociateRoleKeyReference | null;
    __typename: 'AssociateRoleAssignment';
  };

export type TAssociateRoleAssignmentDraftBuilder =
  TBuilder<TAssociateRoleAssignmentDraft>;
export type TCreateAssociateRoleAssignmentDraftBuilder =
  () => TAssociateRoleAssignmentDraftBuilder;
export type TAssociateRoleAssignmentBuilder =
  TBuilder<TAssociateRoleAssignmentDefault>;
export type TCreateAssociateRoleAssignmentBuilder =
  () => TAssociateRoleAssignmentBuilder;
