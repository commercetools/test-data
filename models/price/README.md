# @commercetools-test-data/price

This package provides the data model for the commercetools platform `Price` type

https://docs.commercetools.com/api/types#price

# Install

```bash
$ pnpm add -D @commercetools-test-data/price
```

# Usage

```ts
import type { TPrice, TPriceDraft } from '@commercetools-test-data/price';
import * as Price from '@commercetools-test-data/price';

const price = Price.random().build<TPrice>();
const priceDraft = Price.PriceDraft.random().build<TPriceDraft>();
```
