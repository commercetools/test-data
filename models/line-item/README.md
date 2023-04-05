# @commercetools-test-data/line-item

This package provides the data model for the commercetools platform `LineItem` type

https://docs.commercetools.com/api/types#centprecisionmoney

# Install

```bash
$ yarn add -D @commercetools-test-data/line-item
```

# Usage

```ts
import type {
  TLineItem,
  TLineItemDraft,
} from '@commercetools-test-data/line-item';
import * as LineItem from '@commercetools-test-data/line-item';

const lineItem = LineItem.random().build<TLineItem>();
const lineItemDraft = LineItem.LineItemDraft.random().build<TLineItemDraft>();
```
