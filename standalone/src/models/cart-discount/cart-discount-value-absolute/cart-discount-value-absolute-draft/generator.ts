import { fake, Generator } from '../../../../core';
import { MoneyDraft } from '../../../commons';
import type { TCartDiscountValueAbsoluteDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvalueabsolutedraft

const generator = Generator<TCartDiscountValueAbsoluteDraft>({
  fields: {
    type: 'absolute',
    money: fake(() => [MoneyDraft.random()]),
  },
});

export default generator;
