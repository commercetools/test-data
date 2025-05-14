import { fake, Generator } from '@/core';
import { MoneyDraft } from '@/models/commons';
import { TProductDiscountValueAbsoluteDraft } from '../types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalueabsolutedraft

const generator = Generator<TProductDiscountValueAbsoluteDraft>({
  fields: {
    type: 'absolute',
    money: fake(() => [MoneyDraft.random()]),
  },
});

export default generator;
