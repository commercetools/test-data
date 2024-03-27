/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCustomApplicationInstallation,
  TCustomApplicationInstallationGraphql,
} from './types';
import * as CustomApplicationInstallationModel from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomApplicationInstallation,
      TCustomApplicationInstallation
    >(
      'default',
      CustomApplicationInstallationModel.random(),
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
        ownerId: expect.any(String),
        owner: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCustomApplicationInstallation,
      TCustomApplicationInstallationGraphql
    >(
      'graphql',
      CustomApplicationInstallationModel.random(),
      expect.objectContaining({
        __typename: 'CustomApplicationInstallation',
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
        ownerId: expect.any(String),
        owner: expect.any(Object),
      })
    )
  );
});
