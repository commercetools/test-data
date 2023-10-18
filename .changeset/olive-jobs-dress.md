---
'@commercetools-test-data/custom-view': minor
---

New package to generate test data for Custom Views.

```ts
import {
  CustomView,
  type TCustomViewGraphql,
} from '@commercetools-test-data/custom-view';

const customView = CustomView.random().buildGraphql<TCustomViewGraphql>();
```
