# @commercetools-test-data/standalone-price

This package provides the data model for the commercetools platform `StandalonePrice` type

https://docs.commercetools.com/api/projects/standalone-prices

# Install

```bash
$ yarn add -D @commercetools-test-data/standalone-price
```

# Usage

```ts
import type {
  TStandalonePrice,
  TStandalonePriceDraft,
} from '@commercetools-test-data/standalone-price';
import * as StandalonePrice from '@commercetools-test-data/standalone-price';

const standalonePrice = StandalonePrice.random().build<TStandalonePrice>();
const standalonePriceDraft =
  StandalonePrice.StandalonePriceDraft.random().build<TStandalonePriceDraft>();
```
