---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new models named `CustomFieldsRest`, `CustomFieldsGraphql` and `RawCustomFieldGraphql` that can be consumed from the `@commercetools/composable-commerce-test-data/custom-fields` entry point.

This is how the new models could be used:

```ts
import { CustomFieldsRest } from '@commercetools/composable-commerce-test-data/custom-fields';

const model = CustomFieldsRest.random().build();
```

```ts
import { CustomFieldsGraphql } from '@commercetools/composable-commerce-test-data/custom-fields';

const model = CustomFieldsGraphql.random().build();
```

```ts
import { RawCustomFieldGraphql } from '@commercetools/composable-commerce-test-data/custom-fields';

const model = RawCustomFieldGraphql.random().build();
```
