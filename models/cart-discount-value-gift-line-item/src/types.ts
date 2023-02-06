import type { TBuilder } from '@commercetools-test-data/core';
import {
  CartDiscountValueGiftLineItem,
  CartDiscountValueGiftLineItemDraft,
} from '@commercetools/platform-sdk';

export type TCartDiscountValueGiftLineItem = CartDiscountValueGiftLineItem;
export type TCartDiscountValueGiftLineItemDraft =
  CartDiscountValueGiftLineItemDraft;

export type TCartDiscountValueGiftLineItemGraphql =
  TCartDiscountValueGiftLineItem & {
    __typename: 'CartDiscountValueGiftLineItem';
  };
export type TCartDiscountValueGiftLineItemDraftGraphql =
  TCartDiscountValueGiftLineItemDraft & {
    __typename: 'CartDiscountValueGiftLineItemDraft';
  };

export type TCartDiscountValueGiftLineItemBuilder =
  TBuilder<TCartDiscountValueGiftLineItem>;
export type TCartDiscountValueGiftLineItemDraftBuilder =
  TBuilder<TCartDiscountValueGiftLineItemDraft>;

export type TCreateCartDiscountValueGiftLineItemBuilder =
  () => TCartDiscountValueGiftLineItemBuilder;
export type TCreateCartDiscountValueGiftLineItemDraftBuilder =
  () => TCartDiscountValueGiftLineItemDraftBuilder;
