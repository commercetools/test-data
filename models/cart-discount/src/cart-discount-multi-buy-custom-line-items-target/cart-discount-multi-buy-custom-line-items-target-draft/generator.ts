import { fake, Generator } from '@commercetools-test-data/core';
import { selectionMode } from '../constants';
import type { TCartDiscountMultiBuyCustomLineItemsTargetDraft } from '../types';

// https://docs.commercetools.com/api/projects/cartDiscounts#multibuycustomlineitemstarget

const generator = Generator<TCartDiscountMultiBuyCustomLineItemsTargetDraft>({
  fields: {
    type: 'multiBuyCustomLineItems',
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
