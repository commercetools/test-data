import { fake, Generator } from '../../../../core';
import { MoneyDraft } from '../../../commons';
import { TShippingRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#shippingratedraft

const generator = Generator<TShippingRateDraft>({
  fields: {
    price: fake(() => MoneyDraft.random()),
    freeAbove: fake(() => MoneyDraft.random()),
    tiers: [],
  },
});

export default generator;
