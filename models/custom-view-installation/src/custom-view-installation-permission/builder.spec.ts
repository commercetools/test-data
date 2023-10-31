/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCustomViewInstallationPermission,
  TCustomViewInstallationPermissionGraphql,
} from './types';
import * as CustomViewInstallationPermissionModel from './index';

describe('CustomViewInstallationPermission model builder', () => {
  it(
    ...createBuilderSpec<
      TCustomViewInstallationPermission,
      TCustomViewInstallationPermission
    >(
      'default',
      CustomViewInstallationPermissionModel.random(),
      expect.objectContaining({
        name: 'view',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomViewInstallationPermission,
      TCustomViewInstallationPermissionGraphql
    >(
      'graphql',
      CustomViewInstallationPermissionModel.presets.ViewOnlyPermissions(),
      expect.objectContaining({
        __typename: 'CustomViewInstallationPermission',
        name: 'view',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomViewInstallationPermission,
      TCustomViewInstallationPermissionGraphql
    >(
      'graphql',
      CustomViewInstallationPermissionModel.presets.ManageOnlyPermissions(),
      expect.objectContaining({
        __typename: 'CustomViewInstallationPermission',
        name: 'manage',
        oAuthScopes: expect.arrayContaining([
          expect.stringMatching(/^manage_/),
        ]),
      })
    )
  );
});
