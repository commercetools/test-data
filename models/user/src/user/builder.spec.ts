/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TUser, TUserGraphql } from './types';
import * as User from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TUser, TUser>(
      'default',
      User.random().email('avengers@mcu.com'),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        email: 'avengers@mcu.com',
        lowercaseEmail: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        password: expect.any(String),
        language: ['en'],
        numberFormat: ['en'],
        businessRole: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        lastLoginAt: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TUser, TUser>(
      'rest',
      User.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        email: expect.any(String),
        lowercaseEmail: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        password: expect.any(String),
        language: ['en'],
        numberFormat: ['en'],
        businessRole: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        lastLoginAt: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TUser, TUserGraphql>(
      'graphql',
      User.random(),
      expect.objectContaining({
        __typename: 'User',
        id: expect.any(String),
        version: expect.any(Number),
        email: expect.any(String),
        lowercaseEmail: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        password: expect.any(String),
        language: ['en'],
        numberFormat: ['en'],
        businessRole: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        lastLoginAt: expect.any(String),
      })
    )
  );
});
