import { CartDiscountLineItemsTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';

export type TCartDiscountLineItemsTarget = CartDiscountLineItemsTarget;
export type TCartDiscountLineItemsTargetDraft = CartDiscountLineItemsTarget;

export type TCartDiscountLineItemsTargetGraphql =
  TCartDiscountLineItemsTarget & {
    __typename: 'LineItemsTarget';
  };

export type TCartDiscountLineItemsTargetDraftGraphql = {
  lineItems: Omit<TCartDiscountLineItemsTarget, 'type'>;
};

export type TCartDiscountLineItemsTargetBuilder =
  TBuilder<TCartDiscountLineItemsTarget>;
export type TCartDiscountLineItemsTargetDraftBuilder =
  TBuilder<TCartDiscountLineItemsTargetDraft>;

export type TCreateCartDiscountLineItemsTargetBuilder =
  () => TCartDiscountLineItemsTargetBuilder;
export type TCreateCartDiscountLineItemsTargetDraftBuilder =
  () => TCartDiscountLineItemsTargetDraftBuilder;
