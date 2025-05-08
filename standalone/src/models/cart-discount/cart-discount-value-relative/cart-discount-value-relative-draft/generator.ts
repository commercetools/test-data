import { fake, Generator } from '../../../../core';
import type { TCartDiscountValueRelativeDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluerelativedraft

const generator = Generator<TCartDiscountValueRelativeDraft>({
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
