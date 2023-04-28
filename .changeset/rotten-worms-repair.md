---
'@commercetools-test-data/product-variant': major
'@commercetools-test-data/line-item': major
'@commercetools-test-data/product': major
---

To better align with commercetools’ grouped representations and workflows, models for **ProductVariant**, **ProductCatalogData** and **Image** have been colocated under package `@commercetools-test-data/product-variant`.

Updating this package within your codebase will:<br>
**1.** Require the updating of import statements to reference named exports.<br>
Examples:<br>

- `import { ProductVariantDraft } from '@commercetools-test-data/product-variant’` <br>
- `import { Image } from '@commercetools-test-data/product-variant'`<br><br>

**2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:<br>

- `@commercetools-test-data/attribute` <br>
- `@commercetools-test-data/image` <br>
