# @commercetools-test-data/business-unit

This package provides the data model for the commercetools platform `BusinessUnit` representations

https://docs.commercetools.com/api/projects/business-units#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/business-unit
```

# Usage

Company and Division are classified as distinct types of Business Units, and therefore share a common representation within the package.
<br/>
The strategic separation of splitting them into separate models within this package aims to simplify both the test data itself, as well as their underlying distinctions.

## BusinessUnit - Company & Division

```ts
import { CompanyDraft, DivisionDraft, type TBusinessUnitDraft } from from '@commercetools-test-data/business-unit';

const companyDraft = CompanyDraft.random().build<TBusinessUnitDraft>();
const divisionDraft = DivisionDraft.random().build<TBusinessUnitDraft>();
```
