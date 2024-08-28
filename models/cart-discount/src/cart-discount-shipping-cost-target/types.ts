import type { CartDiscountShippingCostTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountShippingCostTarget = CartDiscountShippingCostTarget;
export type TCartDiscountShippingCostTargetDraft =
  CartDiscountShippingCostTarget;

export type TCartDiscountShippingCostTargetGraphql =
  TCartDiscountShippingCostTarget & {
    __typename: 'ShippingTarget';
  };

export type TCartDiscountShippingCostTargetDraftGraphql = {
  shipping: Omit<TCartDiscountShippingCostTarget, 'type'>;
};

export type TCartDiscountShippingCostTargetBuilder =
  TBuilder<TCartDiscountShippingCostTarget>;
export type TCartDiscountShippingCostTargetDraftBuilder =
  TBuilder<TCartDiscountShippingCostTargetDraft>;

export type TCreateCartDiscountShippingCostTargetBuilder =
  () => TCartDiscountShippingCostTargetBuilder;
export type TCreateCartDiscountShippingCostTargetDraftBuilder =
  () => TCartDiscountShippingCostTargetDraftBuilder;
