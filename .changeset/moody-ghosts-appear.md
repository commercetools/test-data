---
'@commercetools-test-data/attribute-type': major
'@commercetools-test-data/tax-category': major
'@commercetools-test-data/product': major
---

To better align with commercetools’ grouped representations and workflows, models for **TaxCategory** and **TaxRate** have been colocated under package `@commercetools-test-data/tax-category`.

Updating this package within your codebase will:<br>
**1.** Require the updating of import statements to reference named exports.<br>
Examples:<br>
`import { TaxCategoryDraft } from '@commercetools-test-data/tax-category’`<br>
`import { TaxRate } from '@commercetools-test-data/tax-category'`<br><br>
**2.** Require the use of '@commercetools-test-data/tax-rate’ to be discontinued and all references removed, as this package is scheduled to be unpublished.
