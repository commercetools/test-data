/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TTaxRate, TTaxRateGraphql } from './types';
import * as TaxRate from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTaxRate, TTaxRate>(
      'default',
      TaxRate.random(),
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        amount: expect.any(Number),
        includedInPrice: expect.any(Boolean),
        country: expect.any(String),
        state: expect.any(String),
        subRates: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TTaxRate, TTaxRate>(
      'rest',
      TaxRate.random(),
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        amount: expect.any(Number),
        includedInPrice: expect.any(Boolean),
        country: expect.any(String),
        state: expect.any(String),
        subRates: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TTaxRate, TTaxRateGraphql>(
      'graphql',
      TaxRate.random(),
      expect.objectContaining({
        __typename: 'TaxRate',
        id: expect.any(String),
        name: expect.any(String),
        amount: expect.any(Number),
        includedInPrice: expect.any(Boolean),
        country: expect.any(String),
        state: expect.any(String),
        subRates: null,
      })
    )
  );
});
