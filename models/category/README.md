# `@commercetools-test-data/category`

This package provides the data model for the commercetools platform `Category` type

https://docs.commercetools.com/api/projects/categories

## Install

```bash
$ yarn add -D @commercetools-test-data/category
```

## Usage

```ts
import type { TCategory } from '@commercetools-test-data/category';
import * as Category from '@commercetools-test-data/category';

const category = Category.random().build<TCategory>();
```
