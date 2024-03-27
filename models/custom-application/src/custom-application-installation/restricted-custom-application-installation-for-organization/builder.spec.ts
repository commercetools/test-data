/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TRestrictedCustomApplicationInstallationForOrganization,
  TRestrictedCustomApplicationInstallationForOrganizationGraphql,
} from './types';
import * as RestrictedCustomApplicationInstallationForOrganizationModel from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TRestrictedCustomApplicationInstallationForOrganization,
      TRestrictedCustomApplicationInstallationForOrganization
    >(
      'default',
      RestrictedCustomApplicationInstallationForOrganizationModel.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        acceptedPermissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)(\w+)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        application: expect.objectContaining({
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
        }),
        installInAllProjects: expect.any(Boolean),
        projects: expect.any(Array),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TRestrictedCustomApplicationInstallationForOrganization,
      TRestrictedCustomApplicationInstallationForOrganizationGraphql
    >(
      'graphql',
      RestrictedCustomApplicationInstallationForOrganizationModel.random(),
      expect.objectContaining({
        __typename: 'RestrictedCustomApplicationInstallationForOrganization',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        acceptedPermissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)(\w+)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        application: expect.objectContaining({
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
        }),
        installInAllProjects: expect.any(Boolean),
        projects: expect.any(Array),
      })
    )
  );
});
