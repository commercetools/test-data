---
'@commercetools-test-data/product-type': major
'@commercetools-test-data/product': major
'@commercetools-test-data/order': major
'@commercetools-test-data/cart': major
---

To better align with commercetools’ grouped representations and workflows, the following changes have been made:

- The package for **LineItem** will be deprecated and is now colocated under package `@commercetools-test-data/cart`
- The **ProductVariant** package containing **ProductVariant**, **Attribute** and **Image** will be deprecated and models are now colocated under package `@commercetools-test-data/product`
- The package for **AttributeDefinition** will be deprecated and is now colocated under package `@commercetools-test-data/product-type`
- The **AttributeType** package containing **AttributeBooleanType**, **AttributeLocalizedEnumValue**, **AttributePlainEnumValue** and **AttributeTextType** will be deprecated and models are now colocated under package `@commercetools-test-data/product-type`

Updating this package within your codebase will:<br>
**1.** Require the updating of import statements to reference named exports.<br>
Examples:<br>
`import { AttributeType } from '@commercetools-test-data/product-type’`<br>
`import { LineItem } from '@commercetools-test-data/cart'`<br><br>
**2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:<br>

- `@commercetools-test-data/line-item`<br>
- `@commercetools-test-data/product-variant`<br>
- `@commercetools-test-data/attribute-definition`<br>
- `@commercetools-test-data/attribute-type`
