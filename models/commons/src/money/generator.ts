import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import type { TMoney } from './types';

// https://docs.commercetools.com/api/types#money

const generator = Generator<TMoney>({
  fields: {
    centAmount: fake((f) => f.number.int({ min: 5, max: 10 })),
    currencyCode: oneOf('EUR', 'USD'),
  },
});

export default generator;
