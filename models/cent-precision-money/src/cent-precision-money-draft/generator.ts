import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TCentPrecisionMoneyDraft } from './types';

// https://docs.commercetools.com/api/types#money

const generator = Generator<TCentPrecisionMoneyDraft>({
  fields: {
    type: 'centPrecision',
    currencyCode: oneOf('EUR', 'USD'),
    centAmount: fake((f) => f.datatype.number({ min: 10 })),
    // Default fraction digits for a currency for EUR and USD
    fractionDigits: 2,
  },
});

export default generator;
