import { Generator, fake } from '@/core';
import { CentPrecisionMoney } from '@/models/commons';
import { CartScorePriceTierDraftRest } from './shipping-rate-price-tier/cart-score';
import { TShippingRate } from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingrate

const generator = Generator<TShippingRate>({
  fields: {
    price: fake(() => CentPrecisionMoney.random()),
    freeAbove: fake(() => CentPrecisionMoney.random()),
    tiers: fake(() => [CartScorePriceTierDraftRest.random().build()]),
    isMatching: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
