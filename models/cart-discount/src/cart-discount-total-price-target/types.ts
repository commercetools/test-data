import type { CartDiscountTotalPriceTarget } from '@commercetools/platform-sdk';

export type TCartDiscountTotalPriceTargetRest = CartDiscountTotalPriceTarget;
export type TCartDiscountTotalPriceTargetGraphql =
  TCartDiscountTotalPriceTargetRest & {
    __typename: 'CartDiscountTotalPriceTarget';
  };

export type TCartDiscountTotalPriceTargetDraftRest =
  CartDiscountTotalPriceTarget;
export type TCartDiscountTotalPriceTargetDraftGraphql = {
  totalPrice: { dummy?: string | null };
};
