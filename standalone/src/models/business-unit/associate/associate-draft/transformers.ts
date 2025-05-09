import { Transformer } from '../../../../core';
import type { TAssociateDraft, TAssociateDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TAssociateDraft, TAssociateDraft>('default', {
    buildFields: ['associateRoleAssignments', 'customer'],
  }),
  rest: Transformer<TAssociateDraft, TAssociateDraft>('rest', {
    buildFields: ['associateRoleAssignments', 'customer'],
  }),
  graphql: Transformer<TAssociateDraft, TAssociateDraftGraphql>('graphql', {
    buildFields: ['associateRoleAssignments', 'customer'],
  }),
};

export default transformers;
