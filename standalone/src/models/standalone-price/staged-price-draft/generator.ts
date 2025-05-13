import { fake, Generator } from '@/core';
import { MoneyDraft } from '@/models/commons';
import { TStagedPriceDraft } from './types';

// https://docs.commercetools.com/api/projects/standalone-prices#stagedpricedraft

const generator = Generator<TStagedPriceDraft>({
  fields: {
    value: fake(() => MoneyDraft.random()),
  },
});

export default generator;
