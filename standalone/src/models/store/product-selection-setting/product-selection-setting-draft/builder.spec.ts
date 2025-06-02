/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import {
  ProductSelectionSetting,
  ProductSelectionSettingGraphql,
  ProductSelectionSettingRest,
} from '../index';
import type {
  TProductSelectionSettingDraft,
  TProductSelectionSettingDraftGraphql,
  TProductSelectionSettingDraftRest,
} from '../types';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductSelectionSettingDraft,
      TProductSelectionSettingDraft
    >(
      'default',
      ProductSelectionSetting.draft.random(),
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
      TProductSelectionSettingDraftRest,
      TProductSelectionSettingDraftRest
    >(
      'rest',
      ProductSelectionSettingRest.draft.random(),
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
      TProductSelectionSettingDraftGraphql,
      TProductSelectionSettingDraftGraphql
    >(
      'graphql',
      ProductSelectionSettingGraphql.draft.random(),
      expect.objectContaining({
        productSelection: expect.objectContaining({
          typeId: 'product-selection',
          key: expect.any(String),
        }),
        active: expect.any(Boolean),
      })
    )
  );
});
