/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import type {
  TProductSelectionSettingDraft,
  TProductSelectionSettingDraftGraphql,
} from '../types';
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
      TProductSelectionSettingDraft,
      TProductSelectionSettingDraft
    >(
      'rest',
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
      TProductSelectionSettingDraft,
      TProductSelectionSettingDraftGraphql
    >(
      'graphql',
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
});
