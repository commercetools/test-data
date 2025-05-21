/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type { TMcOrganization, TMcOrganizationGraphql } from './types';
import * as McOrganization from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TMcOrganization, TMcOrganization>(
      'default',
      McOrganization.random().name('foo'),
      expect.objectContaining({
        name: 'foo',
        createdAt: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TMcOrganization, TMcOrganizationGraphql>(
      'graphql',
      McOrganization.random(),
      expect.objectContaining({
        __typename: 'Organization',
        name: expect.any(String),
        createdAt: expect.any(String),
      })
    )
  );
});
