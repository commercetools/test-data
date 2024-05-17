/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TOidcSsoConfigDraft } from './types';
import * as OidcSSOConfigDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOidcSsoConfigDraft, TOidcSsoConfigDraft>(
      'default',
      OidcSSOConfigDraft.random(),
      expect.objectContaining({
        authorityUrl: expect.any(String),
        clientId: expect.any(String),
        clientSecret: expect.any(String),
        logoutUrl: expect.any(String),
        sessionTokenExpTimeSeconds: expect.any(Number),
        teamIdForNewUsers: expect.any(String),
      })
    )
  );
  it(
    ...createBuilderSpec<TOidcSsoConfigDraft, TOidcSsoConfigDraft>(
      'graphql',
      OidcSSOConfigDraft.random(),
      expect.objectContaining({
        authorityUrl: expect.any(String),
        clientId: expect.any(String),
        clientSecret: expect.any(String),
        logoutUrl: expect.any(String),
        sessionTokenExpTimeSeconds: expect.any(Number),
        teamIdForNewUsers: expect.any(String),
      })
    )
  );
});
