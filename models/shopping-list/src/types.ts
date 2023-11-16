import type {
  ShoppingList,
  ShoppingListDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TShoppingList = ShoppingList;
export type TShoppingListDraft = ShoppingListDraft;

export type TShoppingListGraphql = TShoppingList & {
  __typename: 'ShoppingList';
};
export type TShoppingListDraftGraphql = TShoppingListDraft;

export type TShoppingListBuilder = TBuilder<TShoppingList>;
export type TShoppingListDraftBuilder = TBuilder<TShoppingListDraft>;
export type TCreateShoppingListBuilder = () => TShoppingListBuilder;
export type TCreateShoppingListDraftBuilder = () => TShoppingListDraftBuilder;
