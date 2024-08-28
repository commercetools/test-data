import { Money } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TStagedStandalonePrice } from './types';

// https://docs.commercetools.com/api/projects/standalone-prices#stagedstandaloneprice

const generator = Generator<TStagedStandalonePrice>({
  fields: {
    value: fake(() => Money.random()),
    discounted: null,
  },
});

export default generator;
