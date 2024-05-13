import {
  CartDiscountValueGiftLineItem,
  CartDiscountValueGiftLineItemDraft,
} from '@commercetools/platform-sdk';
import { TReferenceGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountValueGiftLineItem = CartDiscountValueGiftLineItem;
export type TCartDiscountValueGiftLineItemDraft =
  CartDiscountValueGiftLineItemDraft;

export type TCartDiscountValueGiftLineItemGraphql =
  TCartDiscountValueGiftLineItem & {
    __typename: 'GiftLineItemValue';
  };
export type TCartDiscountValueGiftLineItemDraftGraphql = {
  giftLineItem: Omit<TCartDiscountValueGiftLineItemDraft, 'type'> & {
    distributionChannelRef: TReferenceGraphql | null;
    supplyChannelRef: TReferenceGraphql | null;
  };
};

export type TCartDiscountValueGiftLineItemBuilder =
  TBuilder<TCartDiscountValueGiftLineItem>;
export type TCartDiscountValueGiftLineItemDraftBuilder =
  TBuilder<TCartDiscountValueGiftLineItemDraft>;

export type TCreateCartDiscountValueGiftLineItemBuilder =
  () => TCartDiscountValueGiftLineItemBuilder;
export type TCreateCartDiscountValueGiftLineItemDraftBuilder =
  () => TCartDiscountValueGiftLineItemDraftBuilder;
