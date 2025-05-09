/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import {
  TAssociateRoleAssignmentDefault,
  TAssociateRoleAssignmentRest,
  TAssociateRoleAssignmentGraphql,
} from './types';
import * as AssociateRoleAssignment from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAssociateRoleAssignmentDefault,
      TAssociateRoleAssignmentDefault
    >(
      'default',
      AssociateRoleAssignment.random(),
      expect.objectContaining({
        associateRole: expect.objectContaining({
          id: expect.any(String),
        }),
        inheritance: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAssociateRoleAssignmentDefault,
      TAssociateRoleAssignmentRest
    >(
      'rest',
      AssociateRoleAssignment.random(),
      expect.objectContaining({
        associateRole: expect.objectContaining({
          typeId: 'associate-role',
        }),
        inheritance: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAssociateRoleAssignmentDefault,
      TAssociateRoleAssignmentGraphql
    >(
      'graphql',
      AssociateRoleAssignment.random(),
      expect.objectContaining({
        associateRole: expect.objectContaining({
          id: expect.any(String),
        }),
        associateRoleRef: expect.objectContaining({
          typeId: 'associate-role',
          key: expect.any(String),
          __typename: 'Reference',
        }),
        inheritance: expect.any(String),
        __typename: 'AssociateRoleAssignment',
      })
    )
  );
});
