/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomApplication } from './types';
import * as CustomApplication from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomApplication, TCustomApplication>(
      'default',
      CustomApplication.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        name: expect.any(String),
        permissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)(\w+)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        status: expect.stringMatching(/^(DRAFT|PRIVATE_USAGE)$/),
        url: expect.any(String),
        mainMenuLink: null,
        submenuLinks: [],
        deployments: [],
      })
    )
  );
  it(
    ...createBuilderSpec<TCustomApplication, TCustomApplication>(
      'graphql',
      CustomApplication.random(),
      expect.objectContaining({
        __typename: 'RestrictedCustomApplicationForOrganization',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        name: expect.any(String),
        permissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)(\w+)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        status: expect.stringMatching(/^(DRAFT|PRIVATE_USAGE)$/),
        url: expect.any(String),
        mainMenuLink: null,
        submenuLinks: [],
        deployments: [],
      })
    )
  );
});
