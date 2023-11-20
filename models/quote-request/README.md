# @commercetools-test-data/quote-request

This package provides the data model for the commercetools platform `QuoteRequest` type

https://docs.commercetools.com/api/projects/quote-requests

# Install

```bash
$ pnpm add -D @commercetools-test-data/quote-request
```

# Usage

```ts
import {
  QuoteRequest,
  QuoteRequestDraft,
  type TQuoteRequest,
  type TQuoteRequestDraft,
} from '@commercetools-test-data/quote-request';

const quoteRequest = QuoteRequest.random().build<TQuoteRequest>();
const quoteRequestDraft =
  QuoteRequestDraft.random().build<TQuoteRequestDraft>();
```
