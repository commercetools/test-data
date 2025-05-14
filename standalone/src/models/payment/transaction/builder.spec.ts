/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TTransaction, TTransactionGraphql } from './types';
import * as Transaction from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTransaction, TTransaction>(
      'default',
      Transaction.random(),
      expect.objectContaining({
        id: expect.any(String),
        timestamp: expect.any(String),
        type: expect.any(String),
        amount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          type: expect.any(String),
          fractionDigits: expect.any(Number),
        }),
        interactionId: null,
        state: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TTransaction, TTransaction>(
      'rest',
      Transaction.random(),
      expect.objectContaining({
        id: expect.any(String),
        timestamp: expect.any(String),
        type: expect.any(String),
        amount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          type: expect.any(String),
          fractionDigits: expect.any(Number),
        }),
        interactionId: null,
        state: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TTransaction, TTransactionGraphql>(
      'graphql',
      Transaction.random(),
      expect.objectContaining({
        id: expect.any(String),
        timestamp: expect.any(String),
        type: expect.any(String),
        amount: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
          type: expect.any(String),
          fractionDigits: expect.any(Number),
        }),
        interactionId: null,
        state: expect.any(String),
        custom: null,
        __typename: 'Transaction',
      })
    )
  );
});
