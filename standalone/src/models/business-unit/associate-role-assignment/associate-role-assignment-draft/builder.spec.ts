/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import {
  TAssociateRoleAssignmentDraft,
  TAssociateRoleAssignmentDraftGraphql,
} from '../types';
import * as AssociateRoleAssignmentDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAssociateRoleAssignmentDraft,
      TAssociateRoleAssignmentDraft
    >(
      'default',
      AssociateRoleAssignmentDraft.random(),
      expect.objectContaining({
        associateRole: expect.objectContaining({
          typeId: 'associate-role',
          id: expect.any(String),
        }),
        inheritance: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAssociateRoleAssignmentDraft,
      TAssociateRoleAssignmentDraft
    >(
      'rest',
      AssociateRoleAssignmentDraft.random(),
      expect.objectContaining({
        associateRole: expect.objectContaining({
          typeId: 'associate-role',
          id: expect.any(String),
        }),
        inheritance: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAssociateRoleAssignmentDraft,
      TAssociateRoleAssignmentDraftGraphql
    >(
      'graphql',
      AssociateRoleAssignmentDraft.random(),
      expect.objectContaining({
        associateRole: expect.objectContaining({
          typeId: 'associate-role',
          id: expect.any(String),
        }),
        inheritance: expect.any(String),
      })
    )
  );
});
