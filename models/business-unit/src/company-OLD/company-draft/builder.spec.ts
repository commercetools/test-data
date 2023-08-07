/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCompanyDraft } from '../types';
import * as CompanyDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCompanyDraft, TCompanyDraft>(
      'default',
      CompanyDraft.random(),
      expect.objectContaining({
        unitType: 'Company',
        key: null,
        name: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TCompanyDraft, TCompanyDraft>(
      'rest',
      CompanyDraft.random(),
      expect.objectContaining({
        unitType: 'Company',
        key: null,
        name: null,
      })
    )
  );
  // CompanyDraftGraphql is not supported at this time.
});
