import { fake, Generator, oneOf } from '@/core';
import { TCentPrecisionMoneyDraft } from '../types';

// https://docs.commercetools.com/api/types#centprecisionmoneydraft

const generator = Generator<TCentPrecisionMoneyDraft>({
  fields: {
    centAmount: fake((f) => f.number.int({ min: 1, max: 9999999999 })),
    currencyCode: oneOf('EUR', 'USD'),
    type: 'centPrecision',
    // Default fraction digits for a currency for EUR and USD
    fractionDigits: 2,
  },
});

export default generator;
