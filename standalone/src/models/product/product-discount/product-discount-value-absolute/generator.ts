import { fake, Generator } from '@/core';
import { CentPrecisionMoney } from '@/models/commons';
import type { TProductDiscountValueAbsolute } from './types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalueabsolute

const generator = Generator<TProductDiscountValueAbsolute>({
  fields: {
    type: 'absolute',
    money: [fake(() => CentPrecisionMoney.random())],
  },
});

export default generator;
