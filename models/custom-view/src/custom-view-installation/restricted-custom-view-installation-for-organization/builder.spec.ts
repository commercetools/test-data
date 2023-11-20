/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TRestrictedCustomViewInstallationForOrganization,
  TRestrictedCustomViewInstallationForOrganizationGraphql,
} from './types';
import * as RestrictedCustomViewInstallationForOrganizationModel from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TRestrictedCustomViewInstallationForOrganization,
      TRestrictedCustomViewInstallationForOrganization
    >(
      'default',
      RestrictedCustomViewInstallationForOrganizationModel.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        acceptedPermissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        customView: expect.objectContaining({
          id: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          defaultLabel: expect.any(String),
          labelAllLocales: expect.arrayContaining([
            expect.objectContaining({
              locale: expect.stringMatching(/^(de|en|es)$/),
              value: expect.any(String),
            }),
          ]),
          locators: expect.arrayContaining([expect.any(String)]),
          ownerId: expect.any(String),
          permissions: expect.arrayContaining([
            expect.objectContaining({
              name: expect.stringMatching(/^(view|manage)$/),
              oAuthScopes: expect.arrayContaining([expect.any(String)]),
            }),
          ]),
          status: expect.stringMatching(/^(DRAFT|PRIVATE_USAGE)$/),
          type: 'CustomPanel',
          typeSettings: expect.objectContaining({
            size: expect.stringMatching(/^(SMALL|LARGE)$/),
          }),
          url: expect.any(String),
        }),
        installInAllProjects: expect.any(Boolean),
        projects: expect.any(Array),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TRestrictedCustomViewInstallationForOrganization,
      TRestrictedCustomViewInstallationForOrganizationGraphql
    >(
      'graphql',
      RestrictedCustomViewInstallationForOrganizationModel.random(),
      expect.objectContaining({
        __typename: 'RestrictedCustomViewInstallationForOrganization',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        acceptedPermissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.stringMatching(/^(view|manage)$/),
            oAuthScopes: expect.arrayContaining([expect.any(String)]),
          }),
        ]),
        customView: expect.objectContaining({
          __typename: 'CustomView',
          id: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          defaultLabel: expect.any(String),
          labelAllLocales: expect.arrayContaining([
            expect.objectContaining({
              locale: expect.stringMatching(/^(de|en|es)$/),
              value: expect.any(String),
            }),
          ]),
          locators: expect.arrayContaining([expect.any(String)]),
          ownerId: expect.any(String),
          permissions: expect.arrayContaining([
            expect.objectContaining({
              name: expect.stringMatching(/^(view|manage)$/),
              oAuthScopes: expect.arrayContaining([expect.any(String)]),
            }),
          ]),
          status: expect.stringMatching(/^(DRAFT|PRIVATE_USAGE)$/),
          type: 'CustomPanel',
          typeSettings: expect.objectContaining({
            size: expect.stringMatching(/^(SMALL|LARGE)$/),
          }),
          url: expect.any(String),
        }),
        installInAllProjects: expect.any(Boolean),
        projects: expect.any(Array),
      })
    )
  );
});
