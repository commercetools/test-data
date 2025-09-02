import { Generator, fake } from '@/core';
import { CentPrecisionMoney, MoneyDraftRest } from '@/models/commons';
import { TShippingRate } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingrate

const generator = Generator<TShippingRate>({
  fields: {
    price: fake(() => CentPrecisionMoney.random()),
    freeAbove: fake(() => CentPrecisionMoney.random()),
    tiers: fake(() => [
      {
        type: 'CartScore',
        price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
        score: fake((f) => f.number.int({ min: 1, max: 10 })),
      },
    ]),
    isMatching: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
