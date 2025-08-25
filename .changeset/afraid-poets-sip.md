---
'@commercetools/composable-commerce-test-data': patch
---

We've migrated the `Project` model to the new implementation patterns.

This change does not have any impact on consumers, however the `Project` model is now deprecated and you're expected to start using the `ProjectGraphql` or `ProjectRest` models instead depending of the type of API you're mocking.

```ts
import {
  ProjectGraphql,
  ProjectRest,
} from '@commercetools/composable-commerce-test-data/project';

const projectGraphql = ProjectGraphql.random().build();
const projectRest = ProjectRest.random().build();
```
