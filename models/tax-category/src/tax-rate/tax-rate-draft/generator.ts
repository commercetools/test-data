import { Generator, fake } from '@commercetools-test-data/core';
import type { TTaxRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/taxCategories#taxratedraft

const generator = Generator<TTaxRateDraft>({
  fields: {
    name: fake((f) => f.lorem.words(2)),
    amount: fake((f) => Number(f.finance.amount({ min: 0, max: 1, dec: 3 }))),
    includedInPrice: fake((f) => f.datatype.boolean()),
    country: fake((f) => f.location.countryCode()),
    state: fake((f) => f.location.state()),
    subRates: null,
  },
});

export default generator;
