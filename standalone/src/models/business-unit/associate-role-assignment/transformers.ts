import { type AssociateRoleKeyReference } from '@commercetools/platform-sdk';
import { Transformer } from '../../../core';
import { KeyReference } from '../../commons';
import type {
  TAssociateRoleAssignmentDefault,
  TAssociateRoleAssignmentRest,
  TAssociateRoleAssignmentGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TAssociateRoleAssignmentDefault,
    TAssociateRoleAssignmentDefault
  >('default', {
    buildFields: ['associateRole'],
  }),
  rest: Transformer<
    TAssociateRoleAssignmentDefault,
    TAssociateRoleAssignmentRest
  >('rest', {
    buildFields: ['associateRole'],
    replaceFields: ({ fields }) => {
      const associateRole: AssociateRoleKeyReference = KeyReference.presets
        .associateRole()
        .key(fields.associateRole.key)
        .build();
      return {
        ...fields,
        associateRole,
      };
    },
  }),
  graphql: Transformer<
    TAssociateRoleAssignmentDefault,
    TAssociateRoleAssignmentGraphql
  >('graphql', {
    buildFields: ['associateRole'],
    addFields: ({ fields }) => {
      const associateRoleRef: AssociateRoleKeyReference = KeyReference.presets
        .associateRole()
        .key(fields.associateRole.key)
        .buildGraphql();

      return {
        ...fields,
        associateRoleRef,
        __typename: 'AssociateRoleAssignment',
      };
    },
  }),
};

export default transformers;
