/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type { TCustomApplicationPermissionDraft } from './types';
import * as CustomApplicationPermissionDraftModel from './index';

describe('CustomApplicationPermission model builder', () => {
  it(
    ...createBuilderSpec<
      TCustomApplicationPermissionDraft,
      TCustomApplicationPermissionDraft
    >(
      'default',
      CustomApplicationPermissionDraftModel.random(),
      expect.objectContaining({
        name: expect.stringMatching(/^view/),
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomApplicationPermissionDraft,
      TCustomApplicationPermissionDraft
    >(
      'graphql',
      CustomApplicationPermissionDraftModel.presets.ViewOnlyPermissions(
        'avengers'
      ),
      expect.objectContaining({
        name: 'viewAvengers',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomApplicationPermissionDraft,
      TCustomApplicationPermissionDraft
    >(
      'graphql',
      CustomApplicationPermissionDraftModel.presets.ManageOnlyPermissions(
        'avengers'
      ),
      expect.objectContaining({
        name: 'manageAvengers',
        oAuthScopes: expect.arrayContaining([
          expect.stringMatching(/^manage_/),
        ]),
      })
    )
  );
});
