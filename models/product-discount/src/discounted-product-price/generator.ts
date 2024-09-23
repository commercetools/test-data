import { HighPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TDiscountedProductPriceRest } from './types';

const generator = Generator<TDiscountedProductPriceRest>({
  fields: {
    value: fake(() => HighPrecisionMoney.random()),
    discount: null,
  },
});

export default generator;
