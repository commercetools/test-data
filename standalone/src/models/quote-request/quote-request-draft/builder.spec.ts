/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '../../../core/test-utils';
import type { TQuoteRequestDraft, TQuoteRequestDraftGraphql } from '../types';

import * as QuoteRequestDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TQuoteRequestDraft, TQuoteRequestDraft>(
      'default',
      QuoteRequestDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        cart: expect.objectContaining({
          id: expect.any(String),
        }),
        cartVersion: expect.any(Number),
        comment: null,
        state: null,
        purchaseOrderNumber: null,
        custom: null,
      })
    )
  );
  it(
    ...createBuilderSpec<TQuoteRequestDraft, TQuoteRequestDraft>(
      'rest',
      QuoteRequestDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        cart: expect.objectContaining({
          id: expect.any(String),
        }),
        cartVersion: expect.any(Number),
        comment: null,
        state: null,
        purchaseOrderNumber: null,
        custom: null,
      })
    )
  );
  it(
    ...createBuilderSpec<TQuoteRequestDraft, TQuoteRequestDraftGraphql>(
      'graphql',
      QuoteRequestDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        cart: expect.objectContaining({
          id: expect.any(String),
        }),
        cartVersion: expect.any(Number),
        comment: null,
        state: null,
        purchaseOrderNumber: null,
        custom: null,
      })
    )
  );
});
