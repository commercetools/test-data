/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TMcUser, TMcUserGraphql } from './types';
import * as McUser from './index';

const projects = {
  count: 1,
  offset: 0,
  total: 1,
  results: [
    expect.objectContaining({
      id: expect.any(String),
      key: expect.any(String),
      version: expect.any(Number),
      name: expect.any(String),
      countries: expect.any(Array),
      currencies: expect.any(Array),
      languages: expect.any(Array),
      createdAt: expect.any(String),
      lastModifiedAt: expect.any(String),
    }),
  ],
};

describe('builder', () => {
  it(
    ...createBuilderSpec<TMcUser, TMcUser>(
      'default',
      McUser.random().email('avengers@mcu.com'),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        email: 'avengers@mcu.com',
        firstName: expect.any(String),
        lastName: expect.any(String),
        language: 'en',
        numberFormat: 'en',
        businessRole: expect.any(String),
        timeZone: expect.any(String),
        launchdarklyTrackingId: expect.any(String),
        launchdarklyTrackingGroup: expect.any(String),
        launchdarklyTrackingSubgroup: expect.any(String),
        launchdarklyTrackingTeam: expect.any(Array),
        launchdarklyTrackingTenant: expect.any(String),
        launchdarklyTrackingCloudEnvironment: expect.any(String),
        gravatarHash: expect.any(String),
        defaultProjectKey: expect.any(String),
        projects,
        idTokenUserInfo: expect.objectContaining({
          iss: expect.any(String),
          sub: expect.any(String),
          aud: expect.any(String),
          exp: expect.any(String),
          iat: expect.any(String),
          email: expect.any(String),
          name: expect.any(String),
          additionalClaims: expect.any(String),
        }),
        verificationStatus: 'Verified',
      })
    )
  );

  it(
    ...createBuilderSpec<TMcUser, TMcUser>(
      'rest',
      McUser.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        email: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        language: 'en',
        numberFormat: 'en',
        businessRole: expect.any(String),
        timeZone: expect.any(String),
        launchdarklyTrackingId: expect.any(String),
        launchdarklyTrackingGroup: expect.any(String),
        launchdarklyTrackingSubgroup: expect.any(String),
        launchdarklyTrackingTeam: expect.any(Array),
        launchdarklyTrackingTenant: expect.any(String),
        launchdarklyTrackingCloudEnvironment: expect.any(String),
        gravatarHash: expect.any(String),
        defaultProjectKey: expect.any(String),
        projects,
        idTokenUserInfo: expect.objectContaining({
          iss: expect.any(String),
          sub: expect.any(String),
          aud: expect.any(String),
          exp: expect.any(String),
          iat: expect.any(String),
          email: expect.any(String),
          name: expect.any(String),
          additionalClaims: expect.any(String),
        }),
        verificationStatus: 'Verified',
      })
    )
  );

  it(
    ...createBuilderSpec<TMcUser, TMcUserGraphql>(
      'graphql',
      McUser.random(),
      expect.objectContaining({
        __typename: 'User',
        id: expect.any(String),
        version: expect.any(Number),
        email: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
        language: 'en',
        numberFormat: 'en',
        businessRole: expect.any(String),
        timeZone: expect.any(String),
        launchdarklyTrackingId: expect.any(String),
        launchdarklyTrackingGroup: expect.any(String),
        launchdarklyTrackingSubgroup: expect.any(String),
        launchdarklyTrackingTeam: expect.any(Array),
        launchdarklyTrackingTenant: expect.any(String),
        launchdarklyTrackingCloudEnvironment: expect.any(String),
        gravatarHash: expect.any(String),
        defaultProjectKey: expect.any(String),
        projects,
        idTokenUserInfo: expect.objectContaining({
          iss: expect.any(String),
          sub: expect.any(String),
          aud: expect.any(String),
          exp: expect.any(String),
          iat: expect.any(String),
          email: expect.any(String),
          name: expect.any(String),
          additionalClaims: expect.any(String),
        }),
        verificationStatus: 'Verified',
      })
    )
  );
});
