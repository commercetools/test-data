/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TAssociateDefault, TAssociateRest, TAssociateGraphql } from './types';
import * as Associate from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAssociateDefault, TAssociateDefault>(
      'default',
      Associate.random(),
      expect.objectContaining({
        associateRoleAssignments: expect.arrayContaining([
          expect.objectContaining({
            associateRole: expect.objectContaining({
              key: expect.any(String),
            }),
            inheritance: expect.any(String),
          }),
        ]),
        customer: expect.objectContaining({
          id: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TAssociateDefault, TAssociateRest>(
      'rest',
      Associate.random(),
      expect.objectContaining({
        associateRoleAssignments: expect.arrayContaining([
          expect.objectContaining({
            associateRole: expect.objectContaining({
              key: expect.any(String),
            }),
            inheritance: expect.any(String),
          }),
        ]),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
          obj: expect.objectContaining({
            id: expect.any(String),
          }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TAssociateDefault, TAssociateGraphql>(
      'graphql',
      Associate.random(),
      expect.objectContaining({
        associateRoleAssignments: expect.arrayContaining([
          expect.objectContaining({
            associateRole: expect.objectContaining({
              key: expect.any(String),
            }),
            associateRoleRef: expect.objectContaining({
              typeId: 'associate-role',
              key: expect.any(String),
              __typename: 'Reference',
            }),
            inheritance: expect.any(String),
            __typename: 'AssociateRoleAssignment',
          }),
        ]),
        customer: expect.objectContaining({
          id: expect.any(String),
          email: expect.any(String),
        }),
        customerRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
          __typename: 'Reference',
        }),
        __typename: 'Associate',
      })
    )
  );
});
