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
          mainMenuLink: expect.objectContaining({
            id: expect.any(String),
            defaultLabel: expect.any(String),
            labelAllLocales: expect.arrayContaining([
              expect.objectContaining({
                locale: expect.any(String),
                value: expect.any(String),
              }),
            ]),
          }),
          submenuLinks: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              labelAllLocales: [
                expect.objectContaining({
                  locale: expect.any(String),
                  value: expect.any(String),
                }),
              ],
              defaultLabel: expect.any(String),
              permissions: [],
              uriPath: expect.any(String),
            }),
          ]),
          deployments: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              url: expect.any(String),
              alias: expect.any(String),
            }),
          ]),
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
          mainMenuLink: expect.objectContaining({
            id: expect.any(String),
            defaultLabel: expect.any(String),
            labelAllLocales: expect.arrayContaining([
              expect.objectContaining({
                locale: expect.any(String),
                value: expect.any(String),
              }),
            ]),
          }),
          submenuLinks: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              labelAllLocales: [
                expect.objectContaining({
                  locale: expect.any(String),
                  value: expect.any(String),
                }),
              ],
              defaultLabel: expect.any(String),
              permissions: [],
              uriPath: expect.any(String),
            }),
          ]),
          deployments: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              url: expect.any(String),
              alias: expect.any(String),
            }),
          ]),
        }),
        installInAllProjects: expect.any(Boolean),
        projects: expect.any(Array),
      })
    )
  );
});
