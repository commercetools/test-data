import { fake, Generator } from '../../../core';
import { CentPrecisionMoney } from '../../commons';
import type { TProductDiscountValueAbsolute } from './types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalueabsolute

const generator = Generator<TProductDiscountValueAbsolute>({
  fields: {
    type: 'absolute',
    money: [fake(() => CentPrecisionMoney.random())],
  },
});

export default generator;
