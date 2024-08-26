import { Generator, fake } from '@commercetools-test-data/core';
import { CentPrecisionMoney } from '..';
import productDiscountReference from '../reference/presets/product-discount/product-discount-reference';
import { TDiscountedPrice } from './types';

// https://docs.commercetools.com/api/types#discountedprice

const generator = Generator<TDiscountedPrice>({
  fields: {
    discount: fake(() => productDiscountReference()),
    value: fake(() => CentPrecisionMoney.random()),
  },
});

export default generator;
