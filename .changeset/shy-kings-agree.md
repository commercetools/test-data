---
'@commercetools-test-data/custom-application': minor
---

This package provides the data model for the commercetools internal API `CustomApplication` type

# Install

```bash
$ pnpm add -D @commercetools-test-data/custom-application
```

# Usage

```ts
import {
  CustomApplication,
  CustomApplicationDraft,
  type TCustomApplicationGraphql,
  type TCustomApplicationDraftGraphql,
} from '@commercetools-test-data/custom-application';

const customApplication =
  CustomApplication.random().buildGraphql<TCustomApplicationGraphql>();
const customApplicationDraft =
  CustomApplicationDraft.random().buildGraphql<TCustomApplicationDraftGraphql>();
```
