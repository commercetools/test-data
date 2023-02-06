import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { fake, Generator } from '@commercetools-test-data/core';
import { TCartDiscountValueFixed } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluefixed

const generator = Generator<TCartDiscountValueFixed>({
  fields: {
    type: 'fixed',
    money: fake(() => CentPrecisionMoney.random()),
  },
});

export default generator;
