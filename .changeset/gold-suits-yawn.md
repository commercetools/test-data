---
'@commercetools-test-data/product-discount': major
'@commercetools-test-data/inventory-entry': major
'@commercetools-test-data/shipping-method': major
'@commercetools-test-data/cart-discount': major
'@commercetools-test-data/discount-code': major
'@commercetools-test-data/product-type': major
'@commercetools-test-data/tax-category': major
'@commercetools-test-data/category': major
'@commercetools-test-data/customer': major
'@commercetools-test-data/channel': major
'@commercetools-test-data/commons': major
'@commercetools-test-data/payment': major
'@commercetools-test-data/product': major
'@commercetools-test-data/order': major
'@commercetools-test-data/store': major
'@commercetools-test-data/cart': major
'@commercetools-test-data/zone': major
---

Renamed GoodStore dataset to B2C Lifestyle to support Foundry.

This breaking change updates the export method for GoodStore, now B2C Lifestyle, presets. Presets that use this dataset are also updated.

Updating this package will require changes in your codebase. To migrate:

- Replace any instance of `<Entity>.presets.sampleDataGoodStore.<preset-name>()` with `<Entity>.presets.sampleDataB2CLifestyle.<preset-name>()`
