import { fake, oneOf, Generator } from '@commercetools-test-data/core';
import type { TCentPrecisionMoney } from '../types';
import { fractionDigits } from '../constants';

const generator = Generator<TCentPrecisionMoney>({
  fields: {
    type: 'centPrecision',
    currencyCode: oneOf(...Object.keys(fractionDigits)),
    centAmount: fake((f) => f.datatype.number({ min: 1, max: 999_999_999 })),
    fractionDigits: null,
  },
});

export default generator;
