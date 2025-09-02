import { fake, Generator } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import { TShippingRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingratedraft

const generator = Generator<TShippingRateDraft>({
  fields: {
    price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
    freeAbove: null,
    tiers: fake(() => [
      {
        type: 'CartScore',
        price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
        score: fake((f) => f.number.int({ min: 1, max: 10 })),
      },
    ]),
  },
});

export default generator;
