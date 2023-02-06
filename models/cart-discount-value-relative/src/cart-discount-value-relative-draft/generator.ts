import { fake, Generator } from '@commercetools-test-data/core';
import { TCartDiscountValueRelativeDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountvaluerelativedraft

const generator = Generator<TCartDiscountValueRelativeDraft>({
  fields: {
    type: 'relative',
    permyriad: fake((f) =>
      f.datatype.number({
        min: 0,
        max: 10000,
      })
    ),
  },
});

export default generator;
