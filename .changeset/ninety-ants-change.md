---
'@commercetools-test-data/product-discount': major
---

To better align with commercetools’ grouped representations and workflows, models for **ProductDiscount**, **ProductDiscountValueAbsolute**, **ProductDiscountValueExternal** and **ProductDiscountValueRelative** have been colocated under package `@commercetools-test-data/product-discount`.

Updating this package within your codebase will:<br>
**1.** Require the updating of import statements to reference named exports.<br>
Examples:<br>

- `import { ProductDiscountValueRelativeDraft } from '@commercetools-test-data/product-discount’` <br>
- `import { ProductDiscount } from '@commercetools-test-data/product-discount'`<br><br>

**2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:<br>

- `@commercetools-test-data/product-discount-value-absolute` <br>
- `@commercetools-test-data/product-discount-value-relative` <br>
- `@commercetools-test-data/product-discount-value-external`
