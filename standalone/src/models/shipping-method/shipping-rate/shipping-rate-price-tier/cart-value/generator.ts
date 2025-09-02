import { Generator, fake } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import { TCartValuePriceTier } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#cartvaluetier

const generator = Generator<TCartValuePriceTier>({
  fields: {
    type: 'CartValue',
    price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
    minimumCentAmount: fake((f) => f.number.int({ min: 5000, max: 10000 })),
  },
});

export default generator;
