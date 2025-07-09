import type {
  ShoppingListLineItem,
  ShoppingListLineItemDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpShoppingListLineItem,
  TCtpShoppingListLineItemDraft,
} from '@/graphql-types';

export type TShoppingListLineItemRest = ShoppingListLineItem;
export type TShoppingListLineItemDraftRest = ShoppingListLineItemDraft;

export type TShoppingListLineItemGraphql = TCtpShoppingListLineItem;
export type TShoppingListLineItemDraftGraphql = TCtpShoppingListLineItemDraft;

export type TCreateShoppingListLineItemBuilder<
  TShoppingListLineItemModel extends
    | TShoppingListLineItemRest
    | TShoppingListLineItemGraphql
    | TShoppingListLineItemDraftRest
    | TShoppingListLineItemDraftGraphql,
> = () => TBuilder<TShoppingListLineItemModel>;
