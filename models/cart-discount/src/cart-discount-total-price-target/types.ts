import type { CartDiscountTotalPriceTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountTotalPriceTarget = CartDiscountTotalPriceTarget;
export type TCartDiscountTotalPriceTargetDraft = CartDiscountTotalPriceTarget;

export type TCartDiscountTotalPriceTargetGraphql =
  TCartDiscountTotalPriceTarget & {
    __typename: 'CartDiscountTotalPriceTarget';
  };

export type TCartDiscountTotalPriceTargetDraftGraphql = {
  totalPrice: { dummy?: String | null };
};

export type TCartDiscountTotalPriceTargetBuilder =
  TBuilder<TCartDiscountTotalPriceTarget>;
export type TCartDiscountTotalPriceTargetDraftBuilder =
  TBuilder<TCartDiscountTotalPriceTargetDraft>;

export type TCreateCartDiscountTotalPriceTargetBuilder =
  () => TCartDiscountTotalPriceTargetBuilder;
export type TCreateCartDiscountTotalPriceTargetDraftBuilder =
  () => TCartDiscountTotalPriceTargetDraftBuilder;
