/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TOrganizationExtension } from './types';
import * as OrganizationExtension from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrganizationExtension, TOrganizationExtension>(
      'default',
      OrganizationExtension.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    )
  );
  it(
    ...createBuilderSpec<TOrganizationExtension, TOrganizationExtension>(
      'graphql',
      OrganizationExtension.random(),
      expect.objectContaining({
        __typename: 'OrganizationExtension',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    )
  );
});
