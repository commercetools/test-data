# @commercetools-test-data/review

This package provides the data model for the commercetools platform `Shopping List` type

https://docs.commercetools.com/api/projects/shopping-list#shopping-list

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
