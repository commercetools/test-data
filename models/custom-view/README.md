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
  type TCustomView,
  type TCustomViewDraft,
} from '@commercetools-test-data/custom-view';

const customView = CustomView.random().build<TCustomView>();
const customViewDraft = CustomViewDraft.random().build<TCustomViewDraft>();
```
