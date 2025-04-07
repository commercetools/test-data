# @commercetools-test-data/quote

This package provides the data model for the commercetools platform `StagedQuote` type

https://docs.commercetools.com/api/projects/staged-quotes

# Install

```bash
$ pnpm add -D @commercetools-test-data/staged-quote
```

# Usage

```ts
import {
  StagedQuote,
  StagedQuoteDraft,
  type TStagedQuote,
  type TStagedQuoteDraft,
} from '@commercetools-test-data/quote-request';

const stagedQuote = StagedQuote.random().build<TStagedQuote>();
const stagedQuoteDraft = StagedQuoteDraft.random().build<TStagedQuoteDraft>();
```
