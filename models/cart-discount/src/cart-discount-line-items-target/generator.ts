import { Generator } from '@commercetools-test-data/core';
import { TCartDiscountLineItemsTarget } from './types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountlineitemstarget

const generator = Generator<TCartDiscountLineItemsTarget>({
  fields: {
    type: 'lineItems',
    predicate: '1=1',
  },
});

export default generator;
