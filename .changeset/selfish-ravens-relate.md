---
'@commercetools-test-data/project-extension': minor
---

Add ProjectExtension Model

# Install

```bash
$ pnpm add -D @commercetools-test-data/project-extension
```

# Usage

The package provides models for ProjectExtension.

```ts
import {
  ProjectExtension,
  type TProjectExtension,
  type TProjectExtensionGraphql,
} from '@commercetools-test-data/project-extension';

const projectExtension =
  ProjectExtension.random().buildRest<TProjectExtension>();
const projectExtensionGraphQL =
  ProjectExtension.random().buildGraphql<TProjectExtensionGraphql>();
```
