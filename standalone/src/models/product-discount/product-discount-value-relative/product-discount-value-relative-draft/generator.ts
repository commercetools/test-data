import { fake, Generator } from '../../../../core';
import { TProductDiscountValueRelativeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvaluerelativedraft

const generator = Generator<TProductDiscountValueRelativeDraft>({
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
