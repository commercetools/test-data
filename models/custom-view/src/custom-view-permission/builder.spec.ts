/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomViewPermission } from './types';
import * as CustomViewPermissionModel from './index';

describe('CustomView model builder', () => {
  it(
    ...createBuilderSpec<TCustomViewPermission, TCustomViewPermission>(
      'default',
      CustomViewPermissionModel.random(),
      expect.objectContaining({
        name: '',
        oAuthScopes: expect.arrayContaining([]),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomViewPermission, TCustomViewPermission>(
      'default',
      CustomViewPermissionModel.presets.viewPermission(),
      expect.objectContaining({
        name: 'view',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomViewPermission, TCustomViewPermission>(
      'default',
      CustomViewPermissionModel.presets.managePermission(),
      expect.objectContaining({
        name: 'manage',
        oAuthScopes: expect.arrayContaining([
          expect.stringMatching(/^manage_/),
        ]),
      })
    )
  );
});
