---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new model named `CustomFieldsGraphql` that can be consumed from the `@commercetools/composable-commerce-test-data/custom-fields` entry point.

This is how the new model could be used:

```ts
import { CustomFieldsGraphql } from '@commercetools/composable-commerce-test-data/custom-fields';

const model = CustomFieldsGraphql.random().build();
```
