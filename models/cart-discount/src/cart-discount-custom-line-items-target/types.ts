import {
  CartDiscountCustomLineItemsTarget,
  CartDiscountPatternTarget,
} from '@commercetools/platform-sdk';

export type TCartDiscountCustomLineItemsTargetRest =
  CartDiscountCustomLineItemsTarget;
export type TCartDiscountCustomLineItemsTargetGraphql =
  TCartDiscountCustomLineItemsTargetRest & {
    __typename: 'CustomLineItemsTarget';
  };

export type TCartDiscountCustomLineItemsTargetDraftRest =
  CartDiscountCustomLineItemsTarget;
export type TCartDiscountCustomLineItemsTargetDraftGraphql = {
  customLineItems: Omit<TCartDiscountCustomLineItemsTargetDraftRest, 'type'>;
};
