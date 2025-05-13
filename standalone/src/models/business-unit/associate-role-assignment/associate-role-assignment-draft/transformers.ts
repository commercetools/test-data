import { Transformer } from '@/core';
import type {
  TAssociateRoleAssignmentDraft,
  TAssociateRoleAssignmentDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TAssociateRoleAssignmentDraft,
    TAssociateRoleAssignmentDraft
  >('default', { buildFields: ['associateRole'] }),
  rest: Transformer<
    TAssociateRoleAssignmentDraft,
    TAssociateRoleAssignmentDraft
  >('rest', { buildFields: ['associateRole'] }),
  graphql: Transformer<
    TAssociateRoleAssignmentDraft,
    TAssociateRoleAssignmentDraftGraphql
  >('graphql', { buildFields: ['associateRole'] }),
};

export default transformers;
