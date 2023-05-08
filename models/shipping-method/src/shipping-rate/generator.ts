import { Money } from '@commercetools-test-data/commons';
import { Generator, fake } from '@commercetools-test-data/core';
import { TShippingRate } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingrate

const generator = Generator<TShippingRate>({
  fields: {
    price: fake(() => Money.random()),
    freeAbove: fake(() => Money.random()),
    tiers: [],
    isMatching: fake(() => false),
  },
});

export default generator;
