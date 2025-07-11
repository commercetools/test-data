import type {
  ShoppingList,
  ShoppingListDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShoppingList, TCtpShoppingListDraft } from '@/graphql-types';

/**
 * @deprecated use `TShoppingListRest` or `TShoppingListGraphql` instead
 */
export type TShoppingList = ShoppingList;
export type TShoppingListRest = ShoppingList;
export type TShoppingListGraphql = TCtpShoppingList;

/**
 * @deprecated use `TShoppingListDraftRest` or `TShoppingListDraftGraphql` instead
 */
export type TShoppingListDraft = ShoppingListDraft;
export type TShoppingListDraftRest = ShoppingListDraft;
export type TShoppingListDraftGraphql = TCtpShoppingListDraft;

export type TCreateShoppingListBuilder<
  TTShoppingListModel extends
    | TShoppingListRest
    | TShoppingListGraphql
    | TShoppingListDraftRest
    | TShoppingListDraftGraphql,
> = () => TBuilder<TTShoppingListModel>;
