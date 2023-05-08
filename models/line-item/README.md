# @commercetools-test-data/line-item

This package provides the data model for the commercetools platform `LineItem` type

https://docs.commercetools.com/api/projects/carts#lineitem

# Install

```bash
$ pnpm add -D @commercetools-test-data/line-item
```

# Usage

```ts
import {
  LineItem,
  LineItemDraft,
  type TLineItem,
  type TLineItemDraft,
} from '@commercetools-test-data/line-item';

const lineItem = LineItem.random().build<TLineItem>();
const lineItemDraft = LineItemDraft.random().build<TLineItemDraft>();

// Presets
const emptyLineItemDraft = LineItemDraft.presets
  .empty()
  .build<TLineItemDraft>();
```
