import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TCartDiscountValueFixed } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluefixed

const generator = Generator<TCartDiscountValueFixed>({
  fields: {
    type: 'fixed',
    money: fake(() => [CentPrecisionMoney.random()]),
  },
});

export default generator;
