/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCentPrecisionMoney, TCentPrecisionMoneyGraphql } from './types';
import * as CentPrecisionMoney from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCentPrecisionMoney, TCentPrecisionMoney>(
      'default',
      CentPrecisionMoney.random(),
      expect.objectContaining({
        type: 'centPrecision',
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        fractionDigits: 2,
      })
    )
  );

  it(
    ...createBuilderSpec<TCentPrecisionMoney, TCentPrecisionMoney>(
      'rest',
      CentPrecisionMoney.random(),
      expect.objectContaining({
        type: 'centPrecision',
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        fractionDigits: 2,
      })
    )
  );

  it(
    ...createBuilderSpec<TCentPrecisionMoney, TCentPrecisionMoneyGraphql>(
      'graphql',
      CentPrecisionMoney.random(),
      expect.objectContaining({
        type: 'centPrecision',
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        fractionDigits: 2,
        __typename: 'Money',
      })
    )
  );
});
