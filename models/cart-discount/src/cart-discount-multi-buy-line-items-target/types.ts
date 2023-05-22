import { MultiBuyLineItemsTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountMultiBuyLineItemsTarget = MultiBuyLineItemsTarget;
export type TCartDiscountMultiBuyLineItemsTargetDraft = MultiBuyLineItemsTarget;

export type TCartDiscountMultiBuyLineItemsTargetGraphql =
  TCartDiscountMultiBuyLineItemsTarget & {
    __typename: 'MultiBuyLineItemsTarget';
  };

export type TCartDiscountMultiBuyLineItemsTargetDraftGraphql = {
  multiBuyLineItems: Omit<TCartDiscountMultiBuyLineItemsTarget, 'type'>;
};

export type TCartDiscountMultiBuyLineItemsTargetBuilder =
  TBuilder<TCartDiscountMultiBuyLineItemsTarget>;
export type TCartDiscountMultiBuyLineItemsTargetDraftBuilder =
  TBuilder<TCartDiscountMultiBuyLineItemsTargetDraft>;

export type TCreateCartDiscountMultiBuyLineItemsTargetBuilder =
  () => TCartDiscountMultiBuyLineItemsTargetBuilder;
export type TCreateCartDiscountMultiBuyLineItemsTargetDraftBuilder =
  () => TCartDiscountMultiBuyLineItemsTargetDraftBuilder;
