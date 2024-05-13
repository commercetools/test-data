import {
  CartDiscountValueGiftLineItem,
  CartDiscountValueGiftLineItemDraft,
  ChannelReference,
} from '@commercetools/platform-sdk';
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
    distributionChannelRef: ChannelReference;
    supplyChannelRef: ChannelReference;
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
