/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import type { TOrganizationExtension } from './types';
import * as OrganizationExtension from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrganizationExtension, TOrganizationExtension>(
      'default',
      OrganizationExtension.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        installedApplications: expect.arrayContaining([
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
            installInAllProjects: expect.any(Boolean),
            projects: expect.any(Array),
            application: expect.objectContaining({
              name: expect.any(String),
              description: expect.any(String),
              url: expect.any(String),
            }),
          }),
        ]),
        installedCustomViews: expect.arrayContaining([
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
            installInAllProjects: expect.any(Boolean),
            projects: expect.any(Array),
            ownerId: expect.any(String),
            owner: expect.any(Object),
          }),
        ]),
        organizationId: expect.any(String),
        registeredApplications: expect.arrayContaining([
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
            deployments: expect.arrayContaining([]),
          }),
        ]),
        registeredCustomViews: expect.arrayContaining([
          expect.objectContaining({
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
        ]),
        applicationsMaintainerContactInformation: expect.objectContaining({
          id: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          email: expect.any(String),
          verifiedEmail: expect.any(String),
        }),
        oidcSsoConfig: expect.objectContaining({
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
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TOrganizationExtension, TOrganizationExtension>(
      'graphql',
      OrganizationExtension.random(),
      expect.objectContaining({
        __typename: 'OrganizationExtension',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        installedApplications: expect.arrayContaining([
          expect.objectContaining({
            __typename:
              'RestrictedCustomApplicationInstallationForOrganization',
            id: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            acceptedPermissions: expect.arrayContaining([
              expect.objectContaining({
                name: expect.stringMatching(/^(view|manage)(\w+)$/),
                oAuthScopes: expect.arrayContaining([expect.any(String)]),
              }),
            ]),
            installInAllProjects: expect.any(Boolean),
            projects: expect.any(Array),
            application: expect.objectContaining({
              name: expect.any(String),
              description: expect.any(String),
              url: expect.any(String),
            }),
          }),
        ]),
        installedCustomViews: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'CustomViewInstallation',
            id: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            acceptedPermissions: expect.arrayContaining([
              expect.objectContaining({
                name: expect.stringMatching(/^(view|manage)$/),
                oAuthScopes: expect.arrayContaining([expect.any(String)]),
              }),
            ]),
            installInAllProjects: expect.any(Boolean),
            projects: expect.any(Array),
            ownerId: expect.any(String),
            owner: expect.any(Object),
          }),
        ]),
        organizationId: expect.any(String),
        registeredApplications: expect.arrayContaining([
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
            deployments: expect.arrayContaining([]),
          }),
        ]),
        registeredCustomViews: expect.arrayContaining([
          expect.objectContaining({
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
        ]),
        applicationsMaintainerContactInformation: expect.objectContaining({
          __typename: 'ContactInformation',
          id: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          email: expect.any(String),
          verifiedEmail: expect.any(String),
        }),
        oidcSsoConfig: expect.objectContaining({
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
        }),
      })
    )
  );
});
