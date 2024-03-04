/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TOrganization, TOrganizationGraphql } from './types';
import * as Organization from './index';

const membersAssertion = (args?: { isGraphql: boolean }) =>
  expect.arrayContaining([
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      email: expect.any(String),
      lowercaseEmail: expect.any(String),
      firstName: expect.any(String),
      lastName: expect.any(String),
      language: ['en'],
      numberFormat: ['en'],
      businessRole: expect.any(String),
      createdAt: expect.any(String),
      lastModifiedAt: expect.any(String),
      lastLoginAt: expect.any(String),
      locked: false,
      ...(args?.isGraphql ? { __typename: 'User' } : {}),
    }),
  ]);

const membersRefAssertion = (args?: { isGraphql: boolean }) =>
  expect.arrayContaining([
    expect.objectContaining({
      id: expect.any(String),
      typeId: 'user',
      ...(args?.isGraphql ? { __typename: 'Reference' } : {}),
    }),
  ]);

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrganization, TOrganization>(
      'default',
      Organization.random().name('foo'),
      expect.objectContaining({
        id: expect.any(String),
        name: 'foo',
        teams: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            members: membersAssertion(),
            membersRef: membersRefAssertion(),
          }),
        ]),
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
        teams: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            members: membersAssertion({ isGraphql: true }),
            membersRef: membersRefAssertion({ isGraphql: true }),
          }),
        ]),
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
      })
    )
  );
});
