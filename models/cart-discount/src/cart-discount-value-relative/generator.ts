import { fake, Generator } from '@commercetools-test-data/core';
import type { TCartDiscountValueRelative } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluerelative

const generator = Generator<TCartDiscountValueRelative>({
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
