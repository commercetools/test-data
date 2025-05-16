import { fake, type TModelFieldsConfig } from '@/core';
import { selectionMode } from './constants';
import type {
  TCartDiscountMultiBuyCustomLineItemsTargetGraphql,
  TCartDiscountMultiBuyCustomLineItemsTargetRest,
} from './types';

const commonFieldsConfig = {
  type: 'multiBuyCustomLineItems',
  predicate: '1=1',
  // Refer to the documentation to valid combinations of values, we cannot guarantee them here
  triggerQuantity: fake((f) => f.number.int({ min: 0, max: 100 })),
  discountedQuantity: fake((f) => f.number.int({ min: 0, max: 100 })),
  maxOccurrence: fake((f) => f.number.int({ min: 0, max: 100 })),
  selectionMode: fake((f) =>
    f.helpers.arrayElement(Object.values(selectionMode))
  ),
};
export const restFieldsConfig: TModelFieldsConfig<TCartDiscountMultiBuyCustomLineItemsTargetRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
export const graphqlFieldsConfig: TModelFieldsConfig<TCartDiscountMultiBuyCustomLineItemsTargetGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'CartDiscountMultiBuyCustomLineItemsTarget',
    },
  };
