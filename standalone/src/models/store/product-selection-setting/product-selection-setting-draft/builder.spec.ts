/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import type {
  TProductSelectionSettingDraft,
  TProductSelectionSettingDraftGraphql,
  TProductSelectionSettingDraftRest,
} from '../types';
import {
  ProductSelectionSettingDraft,
  ProductSelectionSettingDraftRest,
  ProductSelectionSettingDraftGraphql,
} from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductSelectionSettingDraft,
      TProductSelectionSettingDraft
    >(
      'default',
      ProductSelectionSettingDraft.random(),
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
      ProductSelectionSettingDraftRest.random(),
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
      ProductSelectionSettingDraftGraphql.random(),
      expect.objectContaining({
        productSelection: expect.objectContaining({
          typeId: 'product-selection',
          id: expect.any(String),
        }),
        active: expect.any(Boolean),
      })
    )
  );
});
