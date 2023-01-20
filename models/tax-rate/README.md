# @commercetools-test-data/tax-rate

This package provides the data model for the commercetools platform `TaxRate` type

https://docs.commercetools.com/api/projects/taxCategories#taxrate

# Install

```bash
$ yarn add -D @commercetools-test-data/tax-rate
```

# Usage

```ts
import type { TTaxRate, TTaxRate } from '@commercetools-test-data/tax-rate';
import * as TaxRate from '@commercetools-test-data/tax-rate';

const taxRate = TaxRate.random().build<TTaxRate>();
const taxRateDraft = TaxRate.TaxRateDraft.random().build<TTaxRateDraft>();
```
