import { MoneyDraft } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TStagedPriceDraft } from './types';

// https://docs.commercetools.com/api/projects/standalone-prices#stagedpricedraft

const generator = Generator<TStagedPriceDraft>({
  fields: {
    value: fake(() => MoneyDraft.random()),
  },
});

export default generator;
