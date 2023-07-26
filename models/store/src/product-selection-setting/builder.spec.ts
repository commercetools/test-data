/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TProductSelectionSetting } from './types';
import * as ProductSelectionSetting from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductSelectionSetting, TProductSelectionSetting>(
      'default',
      ProductSelectionSetting.random(),
      expect.objectContaining({
        productSelection: expect.any(String),
        active: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductSelectionSetting, TProductSelectionSetting>(
      'rest',
      ProductSelectionSetting.random(),
      expect.objectContaining({
        productSelection: expect.any(String),
        active: expect.any(Number),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TProductSelectionSetting,
      TProductSelectionSettingGraphql
    >(
      'graphql',
      ProductSelectionSetting.random(),
      expect.objectContaining({
        productSelection: expect.any(String),
        active: expect.any(Number),
      })
    )
  );
});
