import { fake, oneOf, Generator } from '@commercetools-test-data/core';
import type { TMoney } from './types';

// https://docs.commercetools.com/api/types#typedmoney
const generator = Generator<TMoney>({
  fields: {
    type: 'centPrecision',
    currencyCode: oneOf('EUR', 'USD'),
    centAmount: fake((f) => f.datatype.number({ min: 10 })),
    // Default fraction digits for a currency for EUR and USD
    fractionDigits: 2,
  },
});

export default generator;
