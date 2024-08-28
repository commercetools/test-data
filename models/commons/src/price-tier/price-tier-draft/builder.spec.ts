/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TPriceTierDraft, TPriceTierDraftGraphql } from '../types';
import * as PriceTierDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TPriceTierDraft, TPriceTierDraft>(
      'default',
      PriceTierDraft.random(),
      expect.objectContaining({
        minimumQuantity: expect.any(Number),
        value: expect.objectContaining({
          type: 'centPrecision',
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
          fractionDigits: expect.any(Number),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TPriceTierDraft, TPriceTierDraft>(
      'rest',
      PriceTierDraft.random(),
      expect.objectContaining({
        minimumQuantity: expect.any(Number),
        value: expect.objectContaining({
          type: 'centPrecision',
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
          fractionDigits: expect.any(Number),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TPriceTierDraft, TPriceTierDraftGraphql>(
      'graphql',
      PriceTierDraft.random(),
      expect.objectContaining({
        minimumQuantity: expect.any(Number),
        value: expect.objectContaining({
          type: 'centPrecision',
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
          fractionDigits: expect.any(Number),
        }),
      })
    )
  );
});
