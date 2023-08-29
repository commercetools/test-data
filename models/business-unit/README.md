# @commercetools-test-data/business-unit

This package provides the data model for the commercetools platform `BusinessUnit` representations

https://docs.commercetools.com/api/projects/business-units#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/business-unit
```

# Usage

Please take note that in comparison to previously designed packages and documentation, this format demonstrates a subtle divergence. Company and Division are both classified as distinct types of Business Units, and therefore share a common representation within the model.
<br/>
This strategic separation aims to simplify both the test data itself and the underlying distinctions.

## BusinessUnit - Company & Division

```ts
import { CompanyDraft, DivisionDraft, type TBusinessUnitDraft } from from '@commercetools-test-data/business-unit';

const companyDraft = CompanyDraft.random().build<TBusinessUnitDraft>();
const divisionDraft = DivisionDraft.random().build<TBusinessUnitDraft>();
```
