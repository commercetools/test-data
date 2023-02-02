import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TMoney } from './types';

// https://docs.commercetools.com/api/types#money

const generator = Generator<TMoney>({
  fields: {
    centAmount: fake((f) => f.datatype.number({ min: 10 })),
    currencyCode: oneOf('EUR', 'USD'),
  },
});

export default generator;
