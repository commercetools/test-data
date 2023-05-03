---
'@commercetools-test-data/attribute-definition': major
'@commercetools-test-data/cent-precision-money': major
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
'@commercetools-test-data/review': major
'@commercetools-test-data/money': major
'@commercetools-test-data/order': major
'@commercetools-test-data/price': major
'@commercetools-test-data/cart': major
'@commercetools-test-data/zone': major
'@commercetools-test-data/utils': major
'@commercetools-test-data/core': major
---

To better align with commercetools’ grouped representations and workflows, models for **CartDiscount**, **CartDiscountLineItemsTarget**,**CartDiscountMultiBuyLineItemsTarget**  
**CartDiscountShippingCostTarget**
**CartDiscountValueAbsolute**
**CartDiscountValueFixed**
**CartDiscountValueGiftLineItem** &
**CartDiscountValueRelative** have been colocated under package `@commercetools-test-data/cart-discount`.

Updating this package within your codebase will:<br>
**1.** Require the updating of import statements to reference named exports.<br>
Examples:<br>
`import { CartDiscountValueGiftLineItem } from '@commercetools-test-data/cart-discount’`<br>
`import { CartDiscountDraft } from '@commercetools-test-data/cart-discount'`<br><br>
**2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:

- `@commercetools-test-data/cart-discount-line-items-target`
- `@commercetools-test-data/cart-discount-multi-buy-line-items-target`
- `@commercetools-test-data/cart-discount-shipping-cost-target`
- `@commercetools-test-data/cart-discount-value-absolute`
- `@commercetools-test-data/cart-discount-value-fixed`
- `@commercetools-test-data/cart-discount-value-gift-line-item`
- `@commercetools-test-data/cart-discount-value-relative`
