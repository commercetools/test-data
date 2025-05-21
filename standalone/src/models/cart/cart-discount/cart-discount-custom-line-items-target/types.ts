import { CartDiscountCustomLineItemsTarget } from '@commercetools/platform-sdk';
import { TCtpCustomLineItemsTarget } from '@/graphql-types';

export type TCartDiscountCustomLineItemsTargetRest =
  CartDiscountCustomLineItemsTarget;
export type TCartDiscountCustomLineItemsTargetGraphql =
  TCtpCustomLineItemsTarget;

export type TCartDiscountCustomLineItemsTargetDraftRest =
  CartDiscountCustomLineItemsTarget;
export type TCartDiscountCustomLineItemsTargetDraftGraphql = {
  customLineItems: Omit<TCartDiscountCustomLineItemsTargetDraftRest, 'type'>;
};
