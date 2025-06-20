---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing a new model named `ResourceIdentifier` that can be consumed from the `@commercetools/composable-commerce-test-data/commons` entry point.

This is how the new model could be used:

```ts
import { ResourceIdentifierRest } from '@commercetools/composable-commerce-test-data/commons';

const restModel = ResourceIdentifierRest.random().build();
```

```ts
import { ResourceIdentifierGraphql } from '@commercetools/composable-commerce-test-data/commons';

const graphqlModel = ResourceIdentifierGraphql.random().build();
```

`ResourceIdentifier` model provide support for mocking reference-like fields for draft models, such as `StandalonePriceDraft`.

This model allows setting either `id` or `key`, as expected in reference fields across draft types (e.g. `channel`, `customerGroup`, `recurrencePolicy`).
