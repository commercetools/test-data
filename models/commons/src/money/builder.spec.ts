/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TMoney, TMoneyGraphql } from './types';
import * as Money from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TMoney, TMoney>(
      'default',
      Money.random(),
      expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TMoney, TMoney>(
      'rest',
      Money.random(),
      expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TMoney, TMoneyGraphql>(
      'graphql',
      Money.random(),
      expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        type: 'centPrecision',
        fractionDigits: 2,
        __typename: 'Money',
      })
    )
  );
});
