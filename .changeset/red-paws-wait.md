---
'@commercetools-test-data/product': patch
---

Fixed `ProductVariant` model presets as they were using invalid values to populate the `attributes` property.

Fixed a couple of issues with the `Product` model:

- `searchKeywords` attribute was initialized as `null` where it needs to be an empty array.
- `masterVariant` attribute was not set as _buildable_ in the graphql transformer.
