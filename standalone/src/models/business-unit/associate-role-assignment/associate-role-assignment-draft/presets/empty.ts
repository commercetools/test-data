import type { TAssociateRoleAssignmentDraftBuilder } from '../../types';
import AssociateRoleAssignmentDraft from '../builder';

const empty = (): TAssociateRoleAssignmentDraftBuilder =>
  AssociateRoleAssignmentDraft().inheritance(undefined);

export default empty;
