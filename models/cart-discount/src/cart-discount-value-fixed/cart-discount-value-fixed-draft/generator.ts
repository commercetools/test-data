import { MoneyDraft } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TCartDiscountValueFixedDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluefixeddraft

const generator = Generator<TCartDiscountValueFixedDraft>({
  fields: {
    type: 'fixed',
    money: fake(() => [MoneyDraft.random()]),
  },
});

export default generator;
