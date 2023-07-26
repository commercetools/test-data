/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TProductSelectionSettingDraft } from '../types';
import * as ProductSelectionSettingDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductSelectionSettingDraft,
      TProductSelectionSettingDraft
    >(
      'default',
      ProductSelectionSettingDraft.random(),
      expect.objectContaining({
        productSelection: expect.any(String),
        active: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductSelectionSettingDraft,
      TProductSelectionSettingDraft
    >(
      'rest',
      ProductSelectionSettingDraft.random(),
      expect.objectContaining({
        productSelection: expect.any(String),
        active: expect.any(Number),
      })
    )
  );
  // ProductSelectionSettingDraft/ProductSelectionSettingInput does not exist in a graphql format
});
