import { Generator } from '@commercetools-test-data/core';
import { TProductDiscount } from './types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscount

const generator = Generator<TProductDiscount>({
  fields: {},
});

export default generator;
