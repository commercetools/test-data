import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TProductDiscountValueAbsolute } from './types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalueabsolute

const generator = Generator<TProductDiscountValueAbsolute>({
  fields: {
    type: 'absolute',
    money: fake(() => CentPrecisionMoney.random()),
  },
});

export default generator;
