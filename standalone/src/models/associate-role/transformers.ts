import { Transformer } from '@/core';
import type { TAssociateRole, TAssociateRoleGraphql } from './types';

const transformers = {
  default: Transformer<TAssociateRole, TAssociateRole>('default', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TAssociateRole, TAssociateRole>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TAssociateRole, TAssociateRoleGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: () => ({
      __typename: 'AssociateRole',
    }),
  }),
};

export default transformers;
