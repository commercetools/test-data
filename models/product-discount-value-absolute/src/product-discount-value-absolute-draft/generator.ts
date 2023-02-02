import { fake, Generator } from '@commercetools-test-data/core';
import { TProductDiscountValueAbsoluteDraft } from '../types';
import * as Money from '@commercetools-test-data/money';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalueabsolutedraft

const generator = Generator<TProductDiscountValueAbsoluteDraft>({
  fields: {
    type: 'absolute',
    money: fake(() => [Money.random()]),
  },
});

export default generator;
