# @commercetools-test-data/tax-category

This package provides the data models for the commercetools platform `TaxCategory` representations

https://docs.commercetools.com/api/projects/taxCategories#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/tax-category
```

# Usage

## TaxCategory

```ts
import {
  TaxCategory,
  TaxCategoryDraft,
  type TTaxCategory,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';

const taxCategory = TaxCategory.random().build<TTaxCategory>();
const taxCategoryDraft = TaxCategoryDraft.random().build<TTaxCategoryDraft>();
```

## TaxRate

```ts
import {
  TaxRate,
  TaxRateDraft,
  type TTaxRate,
  type TTaxRateDraft,
} from '@commercetools-test-data/tax-category';

const taxRate = TaxRate.random().build<TTaxRate>();
const taxRateDraft = TaxRateDraft.random().build<TTaxRateDraft>();
```
