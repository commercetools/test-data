/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  THighPrecisionMoneyDraft,
  THighPrecisionMoneyDraftGraphql,
} from '../types';
import * as HighPrecisionMoneyDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<THighPrecisionMoneyDraft, THighPrecisionMoneyDraft>(
      'default',
      HighPrecisionMoneyDraft.random(),
      expect.objectContaining({
        type: 'highPrecision',
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        fractionDigits: expect.any(Number),
        preciseAmount: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<THighPrecisionMoneyDraft, THighPrecisionMoneyDraft>(
      'rest',
      HighPrecisionMoneyDraft.random(),
      expect.objectContaining({
        type: 'highPrecision',
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        fractionDigits: expect.any(Number),
        preciseAmount: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      THighPrecisionMoneyDraft,
      THighPrecisionMoneyDraftGraphql
    >(
      'graphql',
      HighPrecisionMoneyDraft.random(),
      expect.objectContaining({
        type: 'highPrecision',
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        fractionDigits: expect.any(Number),
        preciseAmount: expect.any(Number),
      })
    )
  );
});
