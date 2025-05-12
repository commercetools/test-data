/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type {
  TCustomViewPermissionDraft,
  TCustomViewPermissionDraftGraphql,
} from './types';
import * as CustomViewPermissionDraftModel from './index';

describe('CustomViewPermission model builder', () => {
  it(
    ...createBuilderSpec<
      TCustomViewPermissionDraft,
      TCustomViewPermissionDraft
    >(
      'default',
      CustomViewPermissionDraftModel.random(),
      expect.objectContaining({
        name: 'view',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomViewPermissionDraft,
      TCustomViewPermissionDraftGraphql
    >(
      'graphql',
      CustomViewPermissionDraftModel.presets.ViewOnlyPermissions(),
      expect.objectContaining({
        name: 'view',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomViewPermissionDraft,
      TCustomViewPermissionDraftGraphql
    >(
      'graphql',
      CustomViewPermissionDraftModel.presets.ManageOnlyPermissions(),
      expect.objectContaining({
        name: 'manage',
        oAuthScopes: expect.arrayContaining([
          expect.stringMatching(/^manage_/),
        ]),
      })
    )
  );
});
