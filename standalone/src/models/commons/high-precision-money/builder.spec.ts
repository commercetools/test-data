/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import type { THighPrecisionMoney, THighPrecisionMoneyGraphql } from '../';
import { HighPrecisionMoney } from '../';
import { createBuilderSpec } from '../../../core/test-utils';

describe('builder', () => {
  it(
    ...createBuilderSpec<THighPrecisionMoney, THighPrecisionMoney>(
      'default',
      HighPrecisionMoney.random(),
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
    ...createBuilderSpec<THighPrecisionMoney, THighPrecisionMoney>(
      'rest',
      HighPrecisionMoney.random(),
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
    ...createBuilderSpec<THighPrecisionMoney, THighPrecisionMoneyGraphql>(
      'graphql',
      HighPrecisionMoney.random(),
      expect.objectContaining({
        type: 'highPrecision',
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        fractionDigits: expect.any(Number),
        preciseAmount: expect.any(Number),
        __typename: 'HighPrecisionMoney',
      })
    )
  );
});
