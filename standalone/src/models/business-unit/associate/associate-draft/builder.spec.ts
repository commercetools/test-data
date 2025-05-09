/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import { TAssociateDraft, TAssociateDraftGraphql } from '../types';
import * as AssociateDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAssociateDraft, TAssociateDraft>(
      'default',
      AssociateDraft.random(),
      expect.objectContaining({
        associateRoleAssignments: expect.arrayContaining([
          expect.objectContaining({
            associateRole: expect.objectContaining({
              id: expect.any(String),
            }),
          }),
        ]),
        customer: expect.objectContaining({
          id: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TAssociateDraft, TAssociateDraft>(
      'rest',
      AssociateDraft.random(),
      expect.objectContaining({
        associateRoleAssignments: expect.arrayContaining([
          expect.objectContaining({
            associateRole: expect.objectContaining({
              id: expect.any(String),
            }),
          }),
        ]),
        customer: expect.objectContaining({
          id: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TAssociateDraft, TAssociateDraftGraphql>(
      'graphql',
      AssociateDraft.random(),
      expect.objectContaining({
        associateRoleAssignments: expect.arrayContaining([
          expect.objectContaining({
            associateRole: expect.objectContaining({
              id: expect.any(String),
            }),
          }),
        ]),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
      })
    )
  );
});
