/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
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
          }),
        ]),
        installedCustomViews: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        organizationId: expect.any(String),
        registeredApplications: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        registeredCustomViews: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        applicationsMaintainerContactInformation: expect.objectContaining({
          id: expect.any(String),
          email: expect.any(String),
        }),
        oidcSsoConfig: expect.objectContaining({
          id: expect.any(String),
          clientId: expect.any(String),
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
            id: expect.any(String),
          }),
        ]),
        installedCustomViews: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        organizationId: expect.any(String),
        registeredApplications: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        registeredCustomViews: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        applicationsMaintainerContactInformation: expect.objectContaining({
          id: expect.any(String),
          email: expect.any(String),
        }),
        oidcSsoConfig: expect.objectContaining({
          id: expect.any(String),
          clientId: expect.any(String),
        }),
      })
    )
  );
});
