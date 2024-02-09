/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TOrganization, TOrganizationGraphql } from './types';
import * as Organization from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrganization, TOrganization>(
      'default',
      Organization.random().name('foo'),
      expect.objectContaining({
        name: 'foo',
        teams: [
          {
            id: expect.any(String),
            name: expect.any(String),
          },
        ],
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TOrganization, TOrganization>(
      'rest',
      Organization.random(),
      expect.objectContaining({
        name: expect.any(String),
        teams: [
          {
            id: expect.any(String),
            members: ['member1', 'member2'],
            name: expect.any(String),
          },
        ],
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TOrganization, TOrganizationGraphql>(
      'graphql',
      Organization.random(),
      expect.objectContaining({
        __typename: 'Organization',
        name: expect.any(String),
        teams: [
          {
            __typename: 'Team',
            id: expect.any(String),
            members: [],
            name: expect.any(String),
          },
        ],
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
      })
    )
  );
});
