import { CartDiscountCustomLineItemsTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountCustomLineItemsTarget =
  CartDiscountCustomLineItemsTarget;
export type TCartDiscountCustomLineItemsTargetDraft =
  CartDiscountCustomLineItemsTarget;

export type TCartDiscountCustomLineItemsTargetGraphql =
  TCartDiscountCustomLineItemsTarget & {
    __typename: 'CustomLineItemsTarget';
  };

export type TCartDiscountCustomLineItemsTargetDraftGraphql = {
  customLineItems: Omit<TCartDiscountCustomLineItemsTarget, 'type'>;
};

export type TCartDiscountCustomLineItemsTargetBuilder =
  TBuilder<TCartDiscountCustomLineItemsTarget>;
export type TCartDiscountCustomLineItemsTargetDraftBuilder =
  TBuilder<TCartDiscountCustomLineItemsTargetDraft>;

export type TCreateCartDiscountCustomLineItemsTargetBuilder =
  () => TCartDiscountCustomLineItemsTargetBuilder;
export type TCreateCartDiscountCustomLineItemsTargetDraftBuilder =
  () => TCartDiscountCustomLineItemsTargetDraftBuilder;
