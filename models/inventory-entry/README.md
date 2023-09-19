# @commercetools-test-data/inventory-entry

This package provides the data model for the commercetools platform `InventoryEntry` type

https://docs.commercetools.com/api/projects/inventory#inventoryentry

# Install

```bash
$ yarn add -D @commercetools-test-data/inventory-entry
```

# Usage

```ts
import type {
  TInventoryEntry,
  TInventoryEntryDraft,
} from '@commercetools-test-data/inventory-entry';
import * as InventoryEntry from '@commercetools-test-data/inventory-entry';

const inventoryEntry = InventoryEntry.random().build<TInventoryEntry>();
const inventoryEntryDraft =
  InventoryEntry.InventoryEntryDraft.random().build<TInventoryEntryDraft>();
```
