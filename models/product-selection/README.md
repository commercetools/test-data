# `@commercetools-test-data/product-selection`

This package provides the data model for the commercetools platform `ProductSelection` representation.

https://docs.commercetools.com/api/projects/product-selections#representations

## Install

```bash
$ pnpm add -D @commercetools-test-data/product-selection
```

## Usage

```ts
import {
  ProductSelection,
  ProductSelectionDraft,
  type TProductSelection,
  type TProductSelectionDraft,
} from '@commercetools-test-data/product-selection';

const productSelection = ProductSelection.random().build<TProductSelection>();

const productSelectionDraft =
  ProductSelectionDraft.random().build<TProductSelection>();
```
