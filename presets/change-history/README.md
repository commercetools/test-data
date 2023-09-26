# @commercetools-test-data/change-history

This package provides the data models, presets and types for the commercetools application: `Change History`

# Install

```bash
$ yarn add -D @commercetools-test-data/change-history
```

# Usage examples:

```ts
// Generate random CompanyDraft data
import {
  CompanyDraft,
  type TBusinessUnitDraft,
} from '@commercetools-test-data/change-history';

const companyDraft = CompanyDraft.random().build<TBusinessUnitDraft>();
```

```ts
// Generate TaxCategoryDraft data based on a preset
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/change-history';

const taxCategoryDraft = TaxCategoryDraft.presets.changeHistoryData
  .withTaxRateCountryUsNoState()
  .buildRest<TTaxCategoryDraft>();
```
