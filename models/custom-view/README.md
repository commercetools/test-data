# @commercetools-test-data/custom-view

This package provides the data model for the commercetools internal API `CustomView` type

# Install

```bash
$ pnpm add -D @commercetools-test-data/custom-view
```

# Usage

```ts
import {
  CustomView,
  CustomViewDraft,
  type TCustomViewGraphql,
  type TCustomViewDraftGraphql,
} from '@commercetools-test-data/custom-view';

const customView = CustomView.random().buildGraphql<TCustomViewGraphql>();
const customViewDraft =
  CustomViewDraft.random().buildGraphql<TCustomViewDraftGraphql>();
```
