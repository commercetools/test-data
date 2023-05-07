# `@commercetools-test-data/category`

This package provides the data model for the commercetools platform `Category` type

https://docs.commercetools.com/api/projects/categories

## Install

```bash
$ pnpm add -D @commercetools-test-data/category
```

## Usage

```ts
import {
  Category,
  CategoryDraft,
  type TCategory,
  type TCategoryDraft,
} from '@commercetools-test-data/category';

const category = Category.random().build<TCategory>();
const categoryDraft = CategoryDraft.random().build<TCategory>();

// Presets
const emptyCategoryDraft = CategoryDraft.presets
  .empty()
  .build<TCategoryDraft>();
```
