/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type { TAssociateRoleDraft } from '../types';
import * as AssociateRoleDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAssociateRoleDraft, TAssociateRoleDraft>(
      'default',
      AssociateRoleDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        buyerAssignable: expect.any(Boolean),
        permissions: expect.any(Array),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAssociateRoleDraft, TAssociateRoleDraft>(
      'rest',
      AssociateRoleDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        buyerAssignable: expect.any(Boolean),
        permissions: expect.any(Array),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAssociateRoleDraft, TAssociateRoleDraft>(
      'graphql',
      AssociateRoleDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        buyerAssignable: expect.any(Boolean),
        permissions: expect.any(Array),
        custom: null,
      })
    )
  );
});
