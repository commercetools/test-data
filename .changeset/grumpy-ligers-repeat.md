---
'@commercetools-test-data/attribute-definition': major
'@commercetools-test-data/product-discount': major
'@commercetools-test-data/product-variant': major
'@commercetools-test-data/attribute-type': major
'@commercetools-test-data/customer-group': major
'@commercetools-test-data/cart-discount': major
'@commercetools-test-data/discount-code': major
'@commercetools-test-data/product-type': major
'@commercetools-test-data/tax-category': major
'@commercetools-test-data/line-item': major
'@commercetools-test-data/category': major
'@commercetools-test-data/customer': major
'@commercetools-test-data/channel': major
'@commercetools-test-data/commons': major
'@commercetools-test-data/product': major
'@commercetools-test-data/review': major
'@commercetools-test-data/order': major
'@commercetools-test-data/cart': major
'@commercetools-test-data/zone': major
---

To better align with commercetools’ grouped representations and workflows, models for **Price**, **Money**, and **CentPrecisionMoney** have been colocated under package `@commercetools-test-data/commons`.

Updating this package within your codebase will:<br>
**1.** Require the updating of import statements to reference named exports.<br>
Examples:<br>

- `import { CentPrecisionMoney } from '@commercetools-test-data/commons’` <br>
- `import { PriceDraft } from '@commercetools-test-data/commons'`<br><br>

**2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:<br>

- `@commercetools-test-data/price` <br>
- `@commercetools-test-data/money` <br>
- `@commercetools-test-data/cent-precision-money` <br>
