/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TBusinessUnitDraft } from '../types';
import * as BusinessUnitDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TBusinessUnitDraft, TBusinessUnitDraft>(
      'default',
      BusinessUnitDraft.random(),
      expect.objectContaining({
        unitType: 'Company',
        key: expect.any(String),
        name: expect.any(String),
      })
    )
  );
});
