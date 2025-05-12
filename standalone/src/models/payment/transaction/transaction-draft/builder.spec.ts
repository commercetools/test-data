/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import { TTransactionDraft, TTransactionDraftGraphql } from '../types';
import * as TransactionDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTransactionDraft, TTransactionDraft>(
      'default',
      TransactionDraft.random(),
      expect.objectContaining({
        timestamp: expect.any(String),
        type: expect.any(String),
        amount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        interactionId: null,
        state: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TTransactionDraft, TTransactionDraft>(
      'rest',
      TransactionDraft.random(),
      expect.objectContaining({
        timestamp: expect.any(String),
        type: expect.any(String),
        amount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        interactionId: null,
        state: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TTransactionDraft, TTransactionDraftGraphql>(
      'graphql',
      TransactionDraft.random(),
      expect.objectContaining({
        timestamp: expect.any(String),
        type: expect.any(String),
        amount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        interactionId: null,
        state: expect.any(String),
        custom: null,
      })
    )
  );
});
