---
'@commercetools-test-data/tax-category': major
'@commercetools-test-data/product': major
---

To better align with commercetools’ grouped representations and workflows, models for **Product**, **ProductCatalogData** and **ProductData** have been colocated under package `@commercetools-test-data/product`.

Updating this package within your codebase will:<br>
**1.** Require the updating of import statements to reference named exports.<br>
Examples:<br>
`import { ProductDraft } from '@commercetools-test-data/product’`<br>
`import { ProductCatalogData } from '@commercetools-test-data/product'`<br><br>
**2.** Require the use of `@commercetools-test-data/product-catalog-data` and `@commercetools-test-data/product-data` to be discontinued and all references removed, as these packages are scheduled to be unpublished.
