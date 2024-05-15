import {
  CartDiscountValueGiftLineItem,
  CartDiscountValueGiftLineItemDraft,
} from '@commercetools/platform-sdk';
import { TReference } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCartDiscountValueGiftLineItem = CartDiscountValueGiftLineItem;
export type TCartDiscountValueGiftLineItemDraft =
  CartDiscountValueGiftLineItemDraft;

export type TCartDiscountValueGiftLineItemGraphql = Omit<
  CartDiscountValueGiftLineItem,
  'supplyChannel' | 'distributionChannel' | 'product'
> & {
  productRef: TReference;
  distributionChannelRef: TReference | null;
  supplyChannelRef: TReference | null;
  __typename: 'GiftLineItemValue';
};
export type TCartDiscountValueGiftLineItemDraftGraphql = {
  giftLineItem: Omit<TCartDiscountValueGiftLineItemDraft, 'type'>;
};

export type TCartDiscountValueGiftLineItemBuilder =
  TBuilder<TCartDiscountValueGiftLineItem>;
export type TCartDiscountValueGiftLineItemDraftBuilder =
  TBuilder<TCartDiscountValueGiftLineItemDraft>;

export type TCreateCartDiscountValueGiftLineItemBuilder =
  () => TCartDiscountValueGiftLineItemBuilder;
export type TCreateCartDiscountValueGiftLineItemDraftBuilder =
  () => TCartDiscountValueGiftLineItemDraftBuilder;
