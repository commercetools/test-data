# @commercetools-test-data/tax-category

This package provides the data models for the commercetools platform `Tax Category` representations

https://docs.commercetools.com/api/projects/taxCategories#representations

# Install

```bash
$ yarn add -D @commercetools-test-data/tax-category
```

# Usage

## TaxCategory

```ts
import type { TTaxCategory } from '@commercetools-test-data/tax-category';
import { TaxCategory } from '@commercetools-test-data/tax-category';

const taxCategory = TaxCategory.random().build<TTaxCategory>();
const taxCategoryDraft =
  TaxCategory.TaxCategoryDraft.random().build<TTaxCategoryDraft>();
```

## TaxRate

```ts
import type { TTaxRate } from '@commercetools-test-data/tax-rate';
import { TaxRate } from '@commercetools-test-data/tax-rate';

const taxRate = TaxRate.random().build<TTaxRate>();
const taxRateDraft = TaxRate.TaxRateDraft.random().build<TTaxRateDraft>();
```
