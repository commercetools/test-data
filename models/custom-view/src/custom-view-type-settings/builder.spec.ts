/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCustomViewTypeSettings,
  TCustomViewTypeSettingsGraphql,
} from './types';
import * as CustomViewTypeSettings from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomViewTypeSettings, TCustomViewTypeSettings>(
      'default',
      CustomViewTypeSettings.random(),
      expect.objectContaining({
        size: expect.stringMatching(/SMALL|LARGE/),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomViewTypeSettings,
      TCustomViewTypeSettingsGraphql
    >(
      'graphql',
      CustomViewTypeSettings.random().size('SMALL'),
      expect.objectContaining({
        __typename: 'CustomViewTypeSettings',
        size: 'SMALL',
      })
    )
  );
});
