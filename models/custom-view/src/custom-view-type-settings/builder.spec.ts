/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomViewTypeSettings } from './types';
import * as CustomViewTypeSettingsModel from './index';

describe('CustomView model builder', () => {
  it(
    ...createBuilderSpec<TCustomViewTypeSettings, TCustomViewTypeSettings>(
      'default',
      CustomViewTypeSettingsModel.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TCustomViewTypeSettings, TCustomViewTypeSettings>(
      'default',
      CustomViewTypeSettingsModel.presets.customViewPanelSettings('SMALL'),
      expect.objectContaining({
        size: 'SMALL',
      })
    )
  );
});
