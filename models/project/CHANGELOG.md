# @commercetools-test-data/project

## 7.6.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.6.0
  - @commercetools-test-data/utils@7.6.0

## 7.5.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.5.0
  - @commercetools-test-data/utils@7.5.0

## 7.4.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.4.0
  - @commercetools-test-data/utils@7.4.0

## 7.3.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.3.0
  - @commercetools-test-data/utils@7.3.0

## 7.2.13

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.13
  - @commercetools-test-data/utils@7.2.13

## 7.2.12

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.12
  - @commercetools-test-data/utils@7.2.12

## 7.2.11

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.11
  - @commercetools-test-data/utils@7.2.11

## 7.2.10

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.10
  - @commercetools-test-data/utils@7.2.10

## 7.2.9

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.9
  - @commercetools-test-data/utils@7.2.9

## 7.2.8

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.8
  - @commercetools-test-data/utils@7.2.8

## 7.2.7

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.7
  - @commercetools-test-data/utils@7.2.7

## 7.2.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.6
  - @commercetools-test-data/utils@7.2.6

## 7.2.5

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.5
  - @commercetools-test-data/utils@7.2.5

## 7.2.4

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.4
  - @commercetools-test-data/utils@7.2.4

## 7.2.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.3
  - @commercetools-test-data/utils@7.2.3

## 7.2.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.2
  - @commercetools-test-data/utils@7.2.2

## 7.2.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.1
  - @commercetools-test-data/utils@7.2.1

## 7.2.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.0
  - @commercetools-test-data/utils@7.2.0

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
