---
'@commercetools-test-data/product-variant': patch
'@commercetools-test-data/line-item': patch
'@commercetools-test-data/product': patch
---

refactor(sku and slug): update handling of sku to use a random word followed by 3 random alphanumeric characters to insure sku uniqueness in line-item, product-variant, product-variant-draft, product-data, and product generator.ts files. update slug to use localizedString slug preset in product-draft generator.ts file.
