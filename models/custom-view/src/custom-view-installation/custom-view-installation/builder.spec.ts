/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCustomViewInstallation,
  TCustomViewInstallationGraphql,
} from './types';
import * as CustomViewInstallationModel from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomViewInstallation, TCustomViewInstallation>(
      'default',
      CustomViewInstallationModel.random(),
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
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCustomViewInstallation,
      TCustomViewInstallationGraphql
    >(
      'graphql',
      CustomViewInstallationModel.random(),
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
      })
    )
  );
});
