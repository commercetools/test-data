import { MultiBuyCustomLineItemsTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountMultiBuyLineItemsTarget =
  MultiBuyCustomLineItemsTarget;
export type TCartDiscountMultiBuyLineItemsTargetDraft =
  MultiBuyCustomLineItemsTarget;

export type TCartDiscountMultiBuyLineItemsTargetGraphql =
  TCartDiscountMultiBuyLineItemsTarget & {
    __typename: 'MultiBuyLineItemsTarget';
  };

export type TCartDiscountMultiBuyLineItemsTargetDraftGraphql = {
  multiBuyLineItems: TCartDiscountMultiBuyLineItemsTarget & {
    __typename: 'MultiBuyLineItemsTargetInput';
  };
  __typename: 'CartDiscountTargetInput';
};

export type TCartDiscountMultiBuyLineItemsTargetBuilder =
  TBuilder<TCartDiscountMultiBuyLineItemsTarget>;
export type TCartDiscountMultiBuyLineItemsTargetDraftBuilder =
  TBuilder<TCartDiscountMultiBuyLineItemsTargetDraft>;

export type TCreateCartDiscountMultiBuyLineItemsTargetBuilder =
  () => TCartDiscountMultiBuyLineItemsTargetBuilder;
export type TCreateCartDiscountMultiBuyLineItemsTargetDraftBuilder =
  () => TCartDiscountMultiBuyLineItemsTargetDraftBuilder;
