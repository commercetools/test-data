---
'@commercetools-test-data/project': minor
---

The package provides 2 type of models for Projects: one targeting to Project of the CoCo API and one targeting the Project of the Merchant Center API (prefixed by `Mc`).

```ts
import {
  // CoCo
  Project,
  ProjectDraft,
  type TProject,
  type TProjectDraft,
  // MC
  McProject,
  McProjectDraft,
  type TMcProject,
  type TMcProjectDraft,
} from '@commercetools-test-data/project';

const project = Project.random().buildRest<TProject>();
const projectDraft = ProjectDraft.random().buildRest<TProjectDraft>();

const mcProject = McProject.random().buildGraphql<TMcProject>();
const mcProjectDraft = McProjectDraft.random().buildGraphql<TMcProjectDraft>();
```
