import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TShippingRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingratedraft

const generator = Generator<TShippingRateDraft>({
  fields: {
    price: fake(() => CentPrecisionMoney.random()),
    freeAbove: fake(() => CentPrecisionMoney.random()),
    tiers: [],
  },
});

export default generator;
