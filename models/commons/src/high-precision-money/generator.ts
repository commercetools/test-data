import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { THighPrecisionMoney } from './types';

// https://docs.commercetools.com/api/types#highprecisionmoney

const generator = Generator<THighPrecisionMoney>({
  fields: {
    type: 'highPrecision',
    centAmount: fake((f) => f.number.int({ min: 1, max: 999999 })),
    currencyCode: oneOf('EUR', 'USD'),
    fractionDigits: fake((f) => f.number.int({ min: 3, max: 10 })),
    preciseAmount: fake((f) => f.number.int({ min: 1, max: 9999999999 })),
  },
});

export default generator;
