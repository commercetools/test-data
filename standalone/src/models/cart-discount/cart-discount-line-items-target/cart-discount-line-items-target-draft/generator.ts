import { Generator } from '@/core';
import type { TCartDiscountLineItemsTargetDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscountlineitemstarget

const generator = Generator<TCartDiscountLineItemsTargetDraft>({
  fields: {
    type: 'lineItems',
    predicate: '1=1',
  },
});

export default generator;
