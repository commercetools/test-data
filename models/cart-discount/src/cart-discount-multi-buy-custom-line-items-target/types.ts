import { MultiBuyCustomLineItemsTarget } from '@commercetools/platform-sdk';

export type TCartDiscountMultiBuyCustomLineItemsTargetRest =
  MultiBuyCustomLineItemsTarget;
export type TCartDiscountMultiBuyCustomLineItemsTargetGraphql =
  TCartDiscountMultiBuyCustomLineItemsTargetRest & {
    __typename: 'MultiBuyCustomLineItemsTarget';
  };

export type TCartDiscountMultiBuyCustomLineItemsTargetDraftRest =
  MultiBuyCustomLineItemsTarget;
export type TCartDiscountMultiBuyCustomLineItemsTargetDraftGraphql = {
  multiBuyCustomLineItems: Omit<
    TCartDiscountMultiBuyCustomLineItemsTargetDraftRest,
    'type'
  >;
};
