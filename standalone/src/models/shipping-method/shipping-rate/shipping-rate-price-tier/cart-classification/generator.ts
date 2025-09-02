import { Generator, fake } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import { TCartClassificationPriceTier } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#cartclassificationtier

const generator = Generator<TCartClassificationPriceTier>({
  fields: {
    type: 'CartClassification',
    price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
    value: fake((f) => f.lorem.word()),
  },
});

export default generator;
