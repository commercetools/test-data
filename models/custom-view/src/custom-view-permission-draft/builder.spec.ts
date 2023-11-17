/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCustomViewPermissionDraft,
  TCustomViewPermissionDraftGraphql,
} from './types';
import * as CustomViewPermissionDraftModel from './index';

describe('CustomView model builder', () => {
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
        __typename: 'CustomViewPermission',
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
        __typename: 'CustomViewPermission',
        name: 'manage',
        oAuthScopes: expect.arrayContaining([
          expect.stringMatching(/^manage_/),
        ]),
      })
    )
  );
});
