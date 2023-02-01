import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TCentPrecisionMoney } from './types';

// https://docs.commercetools.com/api/types#centprecisionmoney

const generator = Generator<TCentPrecisionMoney>({
  fields: {
    type: 'centPrecision',
    currencyCode: oneOf('EUR', 'USD'),
    centAmount: fake((f) => f.datatype.number({ min: 10 })),
    // Default fraction digits for a currency for EUR and USD
    fractionDigits: 2,
  },
});

export default generator;
