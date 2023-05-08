import { Money } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TShippingRateDraft } from '../types';

// https://docs.commercetools.com/api/types#money

const generator = Generator<TShippingRateDraft>({
  fields: {
    price: fake(() => Money.random()),
    freeAbove: fake(() => Money.random()),
    tiers: [],
  },
});

export default generator;
