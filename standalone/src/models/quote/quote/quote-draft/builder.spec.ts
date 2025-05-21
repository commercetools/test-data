/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import type { TQuoteDraft, TQuoteDraftGraphql } from '../types';

import * as QuoteDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TQuoteDraft, TQuoteDraft>(
      'default',
      QuoteDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        stagedQuote: expect.objectContaining({
          id: expect.any(String),
        }),
        stagedQuoteVersion: expect.any(Number),
        stagedQuoteStateToSent: undefined,
        state: undefined,
        custom: undefined,
      })
    )
  );
  it(
    ...createBuilderSpec<TQuoteDraft, TQuoteDraft>(
      'rest',
      QuoteDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        stagedQuote: expect.objectContaining({
          id: expect.any(String),
        }),
        stagedQuoteVersion: expect.any(Number),
        stagedQuoteStateToSent: undefined,
        state: undefined,
        custom: undefined,
      })
    )
  );
  it(
    ...createBuilderSpec<TQuoteDraft, TQuoteDraftGraphql>(
      'graphql',
      QuoteDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        stagedQuote: expect.objectContaining({
          id: expect.any(String),
        }),
        stagedQuoteVersion: expect.any(Number),
        stagedQuoteStateToSent: undefined,
        state: undefined,
        custom: undefined,
      })
    )
  );
});
