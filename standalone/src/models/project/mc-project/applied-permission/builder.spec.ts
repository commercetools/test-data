/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TAppliedPermission, TAppliedPermissionGraphql } from './types';
import * as AppliedPermission from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAppliedPermission, TAppliedPermission>(
      'default',
      AppliedPermission.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TAppliedPermission, TAppliedPermission>(
      'rest',
      AppliedPermission.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TAppliedPermission, TAppliedPermissionGraphql>(
      'graphql',
      AppliedPermission.random(),
      expect.objectContaining({
        __typename: 'AppliedPermission',
        name: expect.any(String),
        value: expect.any(Boolean),
      })
    )
  );
});
