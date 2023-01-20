# @commercetools-test-data/tax-category

This package provides the data model for the commercetools platform `TaxCategory` type

https://docs.commercetools.com/api/projects/taxCategories

# Install

```bash
$ yarn add -D @commercetools-test-data/tax-category
```

# Usage

```ts
import type {
  TTaxCategory,
  TTaxCategory,
} from '@commercetools-test-data/tax-category';
import * as TaxCategory from '@commercetools-test-data/tax-category';

const taxCategory = TaxCategory.random().build<TTaxCategory>();
const taxCategoryDraft =
  TaxCategory.TaxCategoryDraft.random().build<TTaxCategoryDraft>();
```
