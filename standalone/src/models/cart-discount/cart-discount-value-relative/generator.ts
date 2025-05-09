import { fake, Generator } from '../../../core';
import { TCartDiscountValueRelative } from './types';

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
