/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import type {
  TCustomApplicationPermission,
  TCustomApplicationPermissionGraphql,
} from './types';
import * as CustomApplicationPermissionModel from './index';

describe('CustomApplication model builder', () => {
  it(
    ...createBuilderSpec<
      TCustomApplicationPermission,
      TCustomApplicationPermission
    >(
      'default',
      CustomApplicationPermissionModel.random(),
      expect.objectContaining({
        name: expect.stringMatching(/^view/),
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomApplicationPermission,
      TCustomApplicationPermissionGraphql
    >(
      'graphql',
      CustomApplicationPermissionModel.presets.ViewOnlyPermissions('avengers'),
      expect.objectContaining({
        __typename: 'CustomApplicationPermission',
        name: 'viewAvengers',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomApplicationPermission,
      TCustomApplicationPermissionGraphql
    >(
      'graphql',
      CustomApplicationPermissionModel.presets.ManageOnlyPermissions(
        'avengers'
      ),
      expect.objectContaining({
        __typename: 'CustomApplicationPermission',
        name: 'manageAvengers',
        oAuthScopes: expect.arrayContaining([
          expect.stringMatching(/^manage_/),
        ]),
      })
    )
  );
});
