import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import type { TMoneyDraft } from '../types';

// https://docs.commercetools.com/api/types#money

const generator = Generator<TMoneyDraft>({
  fields: {
    centAmount: fake((f) => f.number.int({ min: 10, max: 10000 })),
    currencyCode: oneOf('EUR', 'USD'),
  },
});

export default generator;
