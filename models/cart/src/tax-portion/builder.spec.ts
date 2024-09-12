/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TTaxPortion, TTaxPortionGraphql, TTaxPortionRest } from './types';
import { TaxPortion } from '.';

describe('TaxPortion builder spec', () => {
  const expectGenericCentPrecisionMoney = expect.objectContaining({
    centAmount: expect.any(Number),
    currencyCode: expect.any(String),
    fractionDigits: expect.any(Number),
  });

  it(
    ...createBuilderSpec<TTaxPortion, TTaxPortionRest>(
      'rest',
      TaxPortion.random().name('Tax Portion #1'),
      expect.objectContaining({
        name: 'Tax Portion #1',
        rate: expect.any(Number),
        amount: expectGenericCentPrecisionMoney,
      })
    )
  );
  it(
    ...createBuilderSpec<TTaxPortion, TTaxPortionGraphql>(
      'graphql',
      TaxPortion.random().name('Tax Portion #1'),
      expect.objectContaining({
        name: 'Tax Portion #1',
        rate: expect.any(Number),
        amount: expectGenericCentPrecisionMoney,
      })
    )
  );
});
