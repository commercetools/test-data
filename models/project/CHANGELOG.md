# @commercetools-test-data/project

## 7.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.1.1
  - @commercetools-test-data/utils@7.1.1

## 7.1.0

### Minor Changes

- [#464](https://github.com/commercetools/test-data/pull/464) [`d083bc4`](https://github.com/commercetools/test-data/commit/d083bc422cea6471caf4add07bd7acf8504b8355) Thanks [@emmenko](https://github.com/emmenko)! - The package provides 2 type of models for Projects: one targeting to Project of the CoCo API and one targeting the Project of the Merchant Center API (prefixed by `Mc`).

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
  const mcProjectDraft =
    McProjectDraft.random().buildGraphql<TMcProjectDraft>();
  ```

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.1.0
  - @commercetools-test-data/utils@7.1.0