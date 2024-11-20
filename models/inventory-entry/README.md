# @commercetools-test-data/inventory-entry

This package provides the data model for the commercetools platform `InventoryEntry` type

https://docs.commercetools.com/api/projects/inventory#inventoryentry

# Install

```bash
$ yarn add -D @commercetools-test-data/inventory-entry
```

# Usage

```ts
import {
  InventoryEntryRest,
  InventoryEntryDraftRest,
  InventoryEntryGraphql,
  InventoryEntryDraftGraphql,
} from '@commercetools-test-data/inventory-entry';

const inventoryEntryRest = InventoryEntryRest.random().build();
const inventoryEntryDraftRest = InventoryEntryDraftRest.random().build();

const inventoryEntryGraphql = InventoryEntryGraphql.random().build();
const inventoryEntryDraftGraphql = InventoryEntryDraftGraphql.random().build();
```

For backwards compatibility, we still support using the generic data models, but you should consider them legacy as we will be removing them in the future.

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
