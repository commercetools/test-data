/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../core/test-utils';
import type { TAssociateRole, TAssociateRoleGraphql } from './types';
import * as AssociateRole from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAssociateRole, TAssociateRole>(
      'default',
      AssociateRole.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        key: expect.any(String),
        name: expect.any(String),
        buyerAssignable: expect.any(Boolean),
        permissions: expect.any(Array),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAssociateRole, TAssociateRole>(
      'rest',
      AssociateRole.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        key: expect.any(String),
        name: expect.any(String),
        buyerAssignable: expect.any(Boolean),
        permissions: expect.any(Array),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAssociateRole, TAssociateRoleGraphql>(
      'graphql',
      AssociateRole.random(),
      expect.objectContaining({
        __typename: 'AssociateRole',
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
        }),
        key: expect.any(String),
        name: expect.any(String),
        buyerAssignable: expect.any(Boolean),
        permissions: expect.any(Array),
        custom: null,
      })
    )
  );
});
