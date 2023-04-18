import { CartDiscountLineItemsTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountLineItemsTarget = CartDiscountLineItemsTarget;
export type TCartDiscountLineItemsTargetDraft = CartDiscountLineItemsTarget;

export type TCartDiscountLineItemsTargetGraphql =
  TCartDiscountLineItemsTargetDraft & {
    __typename: 'CartDiscountLineItemsTarget';
  };

export type TCartDiscountLineItemsTargetDraftGraphql =
  TCartDiscountLineItemsTargetDraft & {
    __typename: 'CartDiscountLineItemsTargetInput';
  };

export type TCartDiscountLineItemsTargetBuilder =
  TBuilder<TCartDiscountLineItemsTarget>;
export type TCartDiscountLineItemsTargetDraftBuilder =
  TBuilder<TCartDiscountLineItemsTargetDraft>;

export type TCreateCartDiscountLineItemsTargetBuilder =
  () => TCartDiscountLineItemsTargetBuilder;
export type TCreateCartDiscountLineItemsTargetDraftBuilder =
  () => TCartDiscountLineItemsTargetDraftBuilder;
