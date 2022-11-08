import { fake, oneOf, Generator } from '@commercetools-test-data/core';
import type { THighPrecisionMoney } from '../types';
import { fractionDigits } from '../constants';

const generator = Generator<THighPrecisionMoney>({
  fields: {
    centAmount: null,
    type: 'highPrecision',
    currencyCode: oneOf(...Object.keys(fractionDigits)),
    preciseAmount: fake((f) => f.datatype.number({ min: 1, max: 999_999_999 })),
    fractionDigits: null,
  },
});

export default generator;
