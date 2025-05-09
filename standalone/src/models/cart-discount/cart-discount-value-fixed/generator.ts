import { fake, Generator } from '../../../core';
import { CentPrecisionMoney } from '../../commons';
import type { TCartDiscountValueFixed } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluefixed

const generator = Generator<TCartDiscountValueFixed>({
  fields: {
    type: 'fixed',
    money: fake(() => [CentPrecisionMoney.random()]),
  },
});

export default generator;
