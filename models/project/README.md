# @commercetools-test-data/project

This package provides the data model for the commercetools platform `Project` type and the enhanced representation used by the Merchant Center API.

https://docs.commercetools.com/api/projects/project

# Install

```bash
$ pnpm add -D @commercetools-test-data/project
```

# Usage

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
