/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TMcIdTokenUserInfo, TMcIdTokenUserInfoGraphql } from '../types';
import * as IdTokenUserInfo from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TMcIdTokenUserInfo, TMcIdTokenUserInfo>(
      'default',
      IdTokenUserInfo.random(),
      expect.objectContaining({
        iss: expect.any(String),
        sub: expect.any(String),
        aud: expect.any(String),
        exp: expect.any(String),
        iat: expect.any(String),
        email: expect.any(String),
        name: expect.any(String),
        additionalClaims: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TMcIdTokenUserInfo, TMcIdTokenUserInfo>(
      'rest',
      IdTokenUserInfo.random(),
      expect.objectContaining({
        iss: expect.any(String),
        sub: expect.any(String),
        aud: expect.any(String),
        exp: expect.any(String),
        iat: expect.any(String),
        email: expect.any(String),
        name: expect.any(String),
        additionalClaims: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TMcIdTokenUserInfo, TMcIdTokenUserInfoGraphql>(
      'graphql',
      IdTokenUserInfo.random(),
      expect.objectContaining({
        __typename: 'IdTokenUserInfo',
        iss: expect.any(String),
        sub: expect.any(String),
        aud: expect.any(String),
        exp: expect.any(String),
        iat: expect.any(String),
        email: expect.any(String),
        name: expect.any(String),
        additionalClaims: null,
      })
    )
  );
});
