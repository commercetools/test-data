import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TMoney } from './types';

// https://docs.commercetools.com/api/types#money

const generator = Generator<TMoney>({
  fields: {
    currencyCode: oneOf('EUR', 'USD'),
    centAmount: fake((f) => f.datatype.number({ min: 10 })),
  },
});

export default generator;
