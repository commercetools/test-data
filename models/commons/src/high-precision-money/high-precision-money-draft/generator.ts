import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import type { THighPrecisionMoneyDraft } from '../types';

// https://docs.commercetools.com/api/types#highprecisionmoneydraft

const generator = Generator<THighPrecisionMoneyDraft>({
  fields: {
    type: 'highPrecision',
    currencyCode: oneOf('EUR', 'USD'),
    fractionDigits: fake((f) => f.number.int({ min: 3, max: 10 })),
    preciseAmount: fake((f) => f.number.int({ min: 1, max: 9999999999 })),
  },
});

export default generator;
