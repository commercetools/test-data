import { MoneyDraft } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TShippingRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingratedraft

const generator = Generator<TShippingRateDraft>({
  fields: {
    price: fake(() => MoneyDraft.random()),
    freeAbove: fake(() => MoneyDraft.random()),
    tiers: [],
  },
});

export default generator;
