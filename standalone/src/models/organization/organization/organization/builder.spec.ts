/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type { TOrganization, TOrganizationGraphql } from './types';
import * as Organization from './index';

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
            name: 'Administrators',
            members: expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(String),
                typeId: 'user',
              }),
            ]),
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
            members: expect.arrayContaining([
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
                __typename: 'User',
              }),
            ]),
            membersRef: expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(String),
                typeId: 'user',
                __typename: 'Reference',
              }),
            ]),
          }),
        ]),
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
      })
    )
  );
});
