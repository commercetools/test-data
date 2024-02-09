import { MoneyDraft } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TProductDiscountValueAbsoluteDraft } from '../types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalueabsolutedraft

const generator = Generator<TProductDiscountValueAbsoluteDraft>({
  fields: {
    type: 'absolute',
    money: fake(() => [MoneyDraft.random()]),
  },
});

export default generator;
