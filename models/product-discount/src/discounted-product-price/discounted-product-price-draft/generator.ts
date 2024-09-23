import { Generator } from '@commercetools-test-data/core';
import { TDiscountedProductPriceDraft } from '../types';

const generator = Generator<TDiscountedProductPriceDraft>({
  fields: {
    value: null,
    discount: null,
  },
});

export default generator;
