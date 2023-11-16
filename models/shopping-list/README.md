# @commercetools-test-data/shopping-list

This package provides data models for the commercetools platform `Shopping List` representations.

https://docs.commercetools.com/api/projects/shoppingLists#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/shopping-list
```

# Usage

```ts
import {
  ShoppingList,
  ShoppingListDraft,
  type TShoppingList,
  type TShoppingListDraft,
} from '@commercetools-test-data/shopping-list';

const shoppingList = ShoppingList.random().build<TShoppingList>();
const shoppingListDraft =
  ShoppingListDraft.random().build<TShoppingListDraft>();
```
