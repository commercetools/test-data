import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { fake, Generator } from '@commercetools-test-data/core';
import { TProductDiscountValueAbsolute } from './types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalueabsolute

const generator = Generator<TProductDiscountValueAbsolute>({
  fields: {
    type: 'absolute',
    money: fake(() => CentPrecisionMoney.random()),
  },
});

export default generator;
