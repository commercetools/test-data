import { fake, Generator } from '@commercetools-test-data/core';
import { TProductDiscountValueRelative } from './types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvaluerelative

const generator = Generator<TProductDiscountValueRelative>({
  fields: {
    type: 'relative',
    permyriad: fake((f) =>
      f.number.int({
        min: 0,
        max: 10000,
      })
    ),
  },
});

export default generator;
