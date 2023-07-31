/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TProductSelectionSetting,
  TProductSelectionSettingGraphql,
} from './types';
import * as ProductSelectionSetting from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductSelectionSetting, TProductSelectionSetting>(
      'default',
      ProductSelectionSetting.random(),
      expect.objectContaining({
        productSelection: expect.objectContaining({
          typeId: 'product-selection',
          id: expect.any(String),
        }),
        active: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductSelectionSetting, TProductSelectionSetting>(
      'rest',
      ProductSelectionSetting.random(),
      expect.objectContaining({
        productSelection: expect.objectContaining({
          typeId: 'product-selection',
          id: expect.any(String),
        }),
        active: expect.any(Boolean),
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
        productSelection: expect.objectContaining({
          __typename: 'Reference',
          typeId: 'product-selection',
          id: expect.any(String),
        }),
        active: expect.any(Boolean),
      })
    )
  );
});
