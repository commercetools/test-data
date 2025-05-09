import { fake, Generator } from '../../../../core';
import { MoneyDraft } from '../../../commons';
import type { TCartDiscountValueFixedDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluefixeddraft

const generator = Generator<TCartDiscountValueFixedDraft>({
  fields: {
    type: 'fixed',
    money: fake(() => [MoneyDraft.random()]),
  },
});

export default generator;
