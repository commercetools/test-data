/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type { TUserDraft } from '../types';
import * as UserDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TUserDraft, TUserDraft>(
      'default',
      UserDraft.random().email('hello@ct.com'),
      expect.objectContaining({
        email: 'hello@ct.com',
        password: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        language: ['en'],
        numberFormat: ['en'],
        businessRole: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TUserDraft, TUserDraft>(
      'rest',
      UserDraft.random(),
      expect.objectContaining({
        email: expect.any(String),
        password: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        language: ['en'],
        numberFormat: ['en'],
        businessRole: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TUserDraft, TUserDraft>(
      'graphql',
      UserDraft.random(),
      expect.objectContaining({
        email: expect.any(String),
        password: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        language: ['en'],
        numberFormat: ['en'],
        businessRole: expect.any(String),
      })
    )
  );
});
