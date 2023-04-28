import { fake, Generator } from '@commercetools-test-data/core';
import * as Money from '@commercetools-test-data/money';
import { TCartDiscountValueFixedDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluefixeddraft

const generator = Generator<TCartDiscountValueFixedDraft>({
  fields: {
    type: 'fixed',
    money: fake(() => [Money.random()]),
  },
});

export default generator;
