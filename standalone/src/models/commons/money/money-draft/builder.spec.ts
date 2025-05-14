/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TMoneyDraft, TMoneyDraftGraphql } from '../types';
import * as MoneyDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TMoneyDraft, TMoneyDraft>(
      'default',
      MoneyDraft.random(),
      expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TMoneyDraft, TMoneyDraft>(
      'rest',
      MoneyDraft.random(),
      expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TMoneyDraft, TMoneyDraftGraphql>(
      'graphql',
      MoneyDraft.random(),
      expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      })
    )
  );
});
