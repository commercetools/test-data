import { fake, Generator } from '@/core';
import { CentPrecisionMoney } from '@/models/commons';
import type { TCartDiscountValueAbsolute } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvalueabsolute

const generator = Generator<TCartDiscountValueAbsolute>({
  fields: {
    type: 'absolute',
    money: fake(() => [CentPrecisionMoney.random()]),
  },
});

export default generator;
