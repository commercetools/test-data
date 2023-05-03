/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TTaxCategoryDraft, TTaxCategoryDraftGraphql } from '../types';
import * as TaxCategoryDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTaxCategoryDraft, TTaxCategoryDraft>(
      'default',
      TaxCategoryDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        rates: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TTaxCategoryDraft, TTaxCategoryDraft>(
      'rest',
      TaxCategoryDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        rates: expect.any(Array),
      })
    )
  );
  it(
    ...createBuilderSpec<TTaxCategoryDraft, TTaxCategoryDraftGraphql>(
      'graphql',
      TaxCategoryDraft.random(),
      expect.objectContaining({
        __typename: 'TaxCategoryDraft',
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        rates: expect.any(Array),
      })
    )
  );
});
