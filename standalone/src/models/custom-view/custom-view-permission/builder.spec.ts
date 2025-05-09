/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type {
  TCustomViewPermission,
  TCustomViewPermissionGraphql,
} from './types';
import * as CustomViewPermissionModel from './index';

describe('CustomView model builder', () => {
  it(
    ...createBuilderSpec<TCustomViewPermission, TCustomViewPermission>(
      'default',
      CustomViewPermissionModel.random(),
      expect.objectContaining({
        name: 'view',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomViewPermission, TCustomViewPermissionGraphql>(
      'graphql',
      CustomViewPermissionModel.presets.ViewOnlyPermissions(),
      expect.objectContaining({
        __typename: 'CustomViewPermission',
        name: 'view',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomViewPermission, TCustomViewPermissionGraphql>(
      'graphql',
      CustomViewPermissionModel.presets.ManageOnlyPermissions(),
      expect.objectContaining({
        __typename: 'CustomViewPermission',
        name: 'manage',
        oAuthScopes: expect.arrayContaining([
          expect.stringMatching(/^manage_/),
        ]),
      })
    )
  );
});
