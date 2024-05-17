/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TOidcSsoConfig } from './types';
import * as OidcSSOConfig from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOidcSsoConfig, TOidcSsoConfig>(
      'default',
      OidcSSOConfig.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        authorityUrl: expect.any(String),
        clientId: expect.any(String),
        clientSecret: expect.any(String),
        isActive: expect.any(Boolean),
        logoutUrl: expect.any(String),
        sessionTokenExpTimeSeconds: expect.any(Number),
        teamIdForNewUsers: expect.any(String),
      })
    )
  );
  it(
    ...createBuilderSpec<TOidcSsoConfig, TOidcSsoConfig>(
      'graphql',
      OidcSSOConfig.random(),
      expect.objectContaining({
        __typename: 'OidcSsoConfig',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        authorityUrl: expect.any(String),
        clientId: expect.any(String),
        clientSecret: expect.any(String),
        isActive: expect.any(Boolean),
        logoutUrl: expect.any(String),
        sessionTokenExpTimeSeconds: expect.any(Number),
        teamIdForNewUsers: expect.any(String),
      })
    )
  );
});
