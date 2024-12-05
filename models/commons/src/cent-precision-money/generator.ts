import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TCentPrecisionMoney } from './types';

// https://docs.commercetools.com/api/types#centprecisionmoney

const generator = Generator<TCentPrecisionMoney>({
  fields: {
    centAmount: fake((f) => f.number.int({ min: 1, max: 9999999999 })),
    currencyCode: oneOf('EUR', 'USD'),
    type: 'centPrecision',
    // Default fraction digits for a currency for EUR and USD
    fractionDigits: 2,
  },
});

export default generator;
