import { fake, Generator } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import { TShippingRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingratedraft

const generator = Generator<TShippingRateDraft>({
  fields: {
    price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
    freeAbove: null,
    tiers: [],
  },
});

export default generator;
