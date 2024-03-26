/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCustomApplicationPermissionDraft,
  TCustomApplicationPermissionDraftGraphql,
} from './types';
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
        name: 'viewAvengers',
        oAuthScopes: expect.arrayContaining([expect.stringMatching(/^view_/)]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomApplicationPermissionDraft,
      TCustomApplicationPermissionDraftGraphql
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
      TCustomApplicationPermissionDraftGraphql
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
