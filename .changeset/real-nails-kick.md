---
'@commercetools-test-data/product-selection': major
'@commercetools-test-data/product-discount': major
'@commercetools-test-data/standalone-price': major
'@commercetools-test-data/inventory-entry': major
'@commercetools-test-data/shipping-method': major
'@commercetools-test-data/associate-role': major
'@commercetools-test-data/business-unit': major
'@commercetools-test-data/cart-discount': major
'@commercetools-test-data/custom-object': major
'@commercetools-test-data/discount-code': major
'@commercetools-test-data/shopping-list': major
'@commercetools-test-data/product-type': major
'@commercetools-test-data/custom-view': major
'@commercetools-test-data/category': major
'@commercetools-test-data/customer': major
'@commercetools-test-data/channel': major
'@commercetools-test-data/commons': major
'@commercetools-test-data/payment': major
'@commercetools-test-data/product': major
'@commercetools-test-data/order': major
'@commercetools-test-data/state': major
'@commercetools-test-data/store': major
'@commercetools-test-data/cart': major
'@commercetools-test-data/type': major
---

This breaking release excludes \_\_typename from built GraphQL draft models.

Updating this package will require changes in your codebase. To migrate:

- Ensure tests that assert on the presence of \_\_typename in draft GraphQL models are updated to no longer expect this field.
- Update any code that relies on the presence of \_\_typename in draft GraphQL models to align with the new approach.
