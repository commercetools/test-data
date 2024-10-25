import { MultiBuyCustomLineItemsTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountMultiBuyCustomLineItemsTarget =
  MultiBuyCustomLineItemsTarget;
export type TCartDiscountMultiBuyCustomLineItemsTargetDraft =
  MultiBuyCustomLineItemsTarget;

export type TCartDiscountMultiBuyCustomLineItemsTargetGraphql =
  TCartDiscountMultiBuyCustomLineItemsTarget & {
    __typename: 'MultiBuyCustomLineItemsTarget';
  };

export type TCartDiscountMultiBuyCustomLineItemsTargetDraftGraphql = {
  multiBuyCustomLineItems: Omit<
    TCartDiscountMultiBuyCustomLineItemsTarget,
    'type'
  >;
};

export type TCartDiscountMultiBuyCustomLineItemsTargetBuilder =
  TBuilder<TCartDiscountMultiBuyCustomLineItemsTarget>;
export type TCartDiscountMultiBuyCustomLineItemsTargetDraftBuilder =
  TBuilder<TCartDiscountMultiBuyCustomLineItemsTargetDraft>;

export type TCreateCartDiscountMultiBuyCustomLineItemsTargetBuilder =
  () => TCartDiscountMultiBuyCustomLineItemsTargetBuilder;
export type TCreateCartDiscountMultiBuyCustomLineItemsTargetDraftBuilder =
  () => TCartDiscountMultiBuyCustomLineItemsTargetDraftBuilder;
