/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TMoney, TMoneyGraphql } from './types';
import * as Money from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TMoney, TMoney>(
      'default',
      Money.random(),
      expect.objectContaining({
        type: expect.any(String),
        currencyCode: expect.any(String),
        centAmount: expect.any(Number),
        fractionDigits: expect.any(Number),
      })
    )
  );
  it(
    ...createBuilderSpec<TMoney, TMoney>(
      'rest',
      Money.random(),
      expect.objectContaining({
        type: expect.any(String),
        currencyCode: expect.any(String),
        centAmount: expect.any(Number),
        fractionDigits: expect.any(Number),
      })
    )
  );
  it(
    ...createBuilderSpec<TMoney, TMoneyGraphql>(
      'graphql',
      Money.random(),
      expect.objectContaining({
        __typename: 'Money',
        // ...
      })
    )
  );
});
