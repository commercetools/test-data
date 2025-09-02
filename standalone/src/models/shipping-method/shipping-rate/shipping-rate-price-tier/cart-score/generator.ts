import { Generator, fake } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import { TCartScorePriceTier } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#cartscoretier

const generator = Generator<TCartScorePriceTier>({
  fields: {
    type: 'CartScore',
    price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
    score: fake((f) => f.number.int({ min: 1, max: 10 })),
  },
});

export default generator;
