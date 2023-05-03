import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TCartDiscountValueAbsolute } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvalueabsolute

const generator = Generator<TCartDiscountValueAbsolute>({
  fields: {
    type: 'absolute',
    money: fake(() => [CentPrecisionMoney.random()]),
  },
});

export default generator;
