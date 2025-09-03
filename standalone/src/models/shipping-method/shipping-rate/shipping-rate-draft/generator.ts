import { fake, Generator } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import { CartScorePriceTierDraftRest } from '../shipping-rate-price-tier/cart-score';
import { TShippingRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingratedraft

const generator = Generator<TShippingRateDraft>({
  fields: {
    price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
    freeAbove: null,
    tiers: [CartScorePriceTierDraftRest.random()],
  },
});

export default generator;
