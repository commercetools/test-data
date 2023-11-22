# @commercetools-test-data/quote

This package provides the data model for the commercetools platform `Quote` type

https://docs.commercetools.com/api/projects/quotes

# Install

```bash
$ pnpm add -D @commercetools-test-data/quote
```

# Usage

```ts
import {
  Quote,
  QuoteDraft,
  type TQuote,
  type TQuoteDraft,
} from '@commercetools-test-data/quote';

const quote = Quote.random().build<TQuote>();
const quoteDraft = QuoteDraft.random().build<TQuoteDraft>();
```
