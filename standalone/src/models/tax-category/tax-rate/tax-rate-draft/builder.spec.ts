/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import type { TTaxRateDraft, TTaxRateDraftGraphql } from '../types';
import * as TaxRateDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTaxRateDraft, TTaxRateDraft>(
      'default',
      TaxRateDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        amount: expect.any(Number),
        includedInPrice: expect.any(Boolean),
        country: expect.any(String),
        state: expect.any(String),
        subRates: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TTaxRateDraft, TTaxRateDraft>(
      'rest',
      TaxRateDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        amount: expect.any(Number),
        includedInPrice: expect.any(Boolean),
        country: expect.any(String),
        state: expect.any(String),
        subRates: null,
      })
    )
  );
  it(
    ...createBuilderSpec<TTaxRateDraft, TTaxRateDraftGraphql>(
      'graphql',
      TaxRateDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        amount: expect.any(Number),
        includedInPrice: expect.any(Boolean),
        country: expect.any(String),
        state: expect.any(String),
        subRates: null,
      })
    )
  );
});
