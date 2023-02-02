import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TCentPrecisionMoneyDraft } from './types';

// https://docs.commercetools.com/api/types#centprecisionmoneydraft

const generator = Generator<TCentPrecisionMoneyDraft>({
  fields: {
    centAmount: fake((f) => f.datatype.number({ min: 10 })),
    currencyCode: oneOf('EUR', 'USD'),
    type: 'centPrecision',
    // Default fraction digits for a currency for EUR and USD
    fractionDigits: 2,
  },
});

export default generator;
