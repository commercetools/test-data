---
'@commercetools-test-data/attribute-definition': major
'@commercetools-test-data/attribute-type': major
'@commercetools-test-data/product-type': major
---

To better align with commercetools’ grouped representations and workflows, models for **AttributeType** and **AttributePlainEnumValue** have been colocated under package `@commercetools-test-data/attribute-type`.

Updating this package within your codebase will:<br>
**1.** Require the updating of import statements to reference named exports.<br>
Examples:<br>
`import { AttributeType } from '@commercetools-test-data/attribute-type’`<br>
`import { AttributePlainEnumValue } from '@commercetools-test-data/attribute-type'`<br><br>
**2.** Require the use of '@commercetools-test-data/attribute-plain-enum-value’ to be discontinued and all references removed, as this package is scheduled to be unpublished.
