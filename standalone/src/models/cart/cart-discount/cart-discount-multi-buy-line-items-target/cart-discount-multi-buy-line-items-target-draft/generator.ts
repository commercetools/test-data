import { fake, Generator } from '@/core';
import { selectionMode } from '../constants';
import type { TCartDiscountMultiBuyLineItemsTargetDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#multibuylineitemstarget

const generator = Generator<TCartDiscountMultiBuyLineItemsTargetDraft>({
  fields: {
    type: 'multiBuyLineItems',
    predicate: '1=1',
    // Refer to the documentation to valid combinations of values, we cannot guarantee them here
    triggerQuantity: fake((f) => f.number.int({ min: 0, max: 100 })),
    discountedQuantity: fake((f) => f.number.int({ min: 0, max: 100 })),
    maxOccurrence: fake((f) => f.number.int({ min: 0, max: 100 })),
    selectionMode: fake((f) =>
      f.helpers.arrayElement(Object.values(selectionMode))
    ),
  },
});

export default generator;
