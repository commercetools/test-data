import { Generator } from '@commercetools-test-data/core';
import type { TCartDiscountCustomLineItemsTarget } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountcustomlineitemstarget

const generator = Generator<TCartDiscountCustomLineItemsTarget>({
  fields: {
    type: 'customLineItems',
    predicate: '1=1',
  },
});

export default generator;
