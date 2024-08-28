/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TProjectExpiry, TProjectExpiryGraphql } from './types';
import * as ProjectExpiry from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProjectExpiry, TProjectExpiry>(
      'default',
      ProjectExpiry.random(),
      expect.objectContaining({
        isActive: expect.any(Boolean),
        daysLeft: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TProjectExpiry, TProjectExpiry>(
      'rest',
      ProjectExpiry.random(),
      expect.objectContaining({
        isActive: expect.any(Boolean),
        daysLeft: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TProjectExpiry, TProjectExpiryGraphql>(
      'graphql',
      ProjectExpiry.random().isActive(true).daysLeft(5),
      expect.objectContaining({
        __typename: 'ProjectExpiry',
        isActive: true,
        daysLeft: 5,
      })
    )
  );
});
