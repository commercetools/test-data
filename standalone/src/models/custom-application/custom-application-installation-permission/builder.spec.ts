/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type {
  TCustomApplicationInstallationPermission,
  TCustomApplicationInstallationPermissionGraphql,
} from './types';
import * as CustomApplicationInstallationPermissionModel from './index';

describe('CustomApplicationInstallationPermission model builder', () => {
  it(
    ...createBuilderSpec<
      TCustomApplicationInstallationPermission,
      TCustomApplicationInstallationPermission
    >(
      'default',
      CustomApplicationInstallationPermissionModel.random(),
      expect.objectContaining({
        name: expect.stringMatching(/^view/),
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomApplicationInstallationPermission,
      TCustomApplicationInstallationPermissionGraphql
    >(
      'graphql',
      CustomApplicationInstallationPermissionModel.presets.ViewOnlyPermissions(
        'avengers'
      ),
      expect.objectContaining({
        __typename: 'CustomApplicationInstallationPermission',
        name: 'viewAvengers',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomApplicationInstallationPermission,
      TCustomApplicationInstallationPermissionGraphql
    >(
      'graphql',
      CustomApplicationInstallationPermissionModel.presets.ManageOnlyPermissions(
        'avengers'
      ),
      expect.objectContaining({
        __typename: 'CustomApplicationInstallationPermission',
        name: 'manageAvengers',
        oAuthScopes: expect.arrayContaining([
          expect.stringMatching(/^manage_/),
        ]),
      })
    )
  );
});
