# @commercetools-test-data/organization

## 7.9.1

### Patch Changes

- Updated dependencies [[`b9cdca7`](https://github.com/commercetools/test-data/commit/b9cdca7651dc32104eaaf1cded548d13ad6b82fe)]:
  - @commercetools-test-data/commons@7.9.1
  - @commercetools-test-data/user@7.9.1
  - @commercetools-test-data/core@7.9.1
  - @commercetools-test-data/graphql-types@7.9.1
  - @commercetools-test-data/utils@7.9.1

## 7.9.0

### Patch Changes

- Updated dependencies [[`5d71e0b`](https://github.com/commercetools/test-data/commit/5d71e0be9e04e3fabe2de81fc71fe1be9d1bbc5d)]:
  - @commercetools-test-data/commons@7.9.0
  - @commercetools-test-data/user@7.9.0
  - @commercetools-test-data/core@7.9.0
  - @commercetools-test-data/graphql-types@7.9.0
  - @commercetools-test-data/utils@7.9.0

## 7.8.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.8.0
  - @commercetools-test-data/graphql-types@7.8.0
  - @commercetools-test-data/commons@7.8.0
  - @commercetools-test-data/user@7.8.0
  - @commercetools-test-data/utils@7.8.0

## 7.7.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.7.1
  - @commercetools-test-data/graphql-types@7.7.1
  - @commercetools-test-data/commons@7.7.1
  - @commercetools-test-data/user@7.7.1
  - @commercetools-test-data/utils@7.7.1

## 7.7.0

### Patch Changes

- Updated dependencies [[`53e2e9d`](https://github.com/commercetools/test-data/commit/53e2e9d24416905f25178ef11a5be9900b4fa2e9)]:
  - @commercetools-test-data/commons@7.7.0
  - @commercetools-test-data/user@7.7.0
  - @commercetools-test-data/core@7.7.0
  - @commercetools-test-data/graphql-types@7.7.0
  - @commercetools-test-data/utils@7.7.0

## 7.6.0

### Patch Changes

- Updated dependencies [[`daf9988`](https://github.com/commercetools/test-data/commit/daf9988b8dfa0a29a5005e08a5f21b2af5d117cf)]:
  - @commercetools-test-data/commons@7.6.0
  - @commercetools-test-data/user@7.6.0
  - @commercetools-test-data/core@7.6.0
  - @commercetools-test-data/graphql-types@7.6.0
  - @commercetools-test-data/utils@7.6.0

## 7.5.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.5.0
  - @commercetools-test-data/graphql-types@7.5.0
  - @commercetools-test-data/commons@7.5.0
  - @commercetools-test-data/user@7.5.0
  - @commercetools-test-data/utils@7.5.0

## 7.4.0

### Minor Changes

- [#467](https://github.com/commercetools/test-data/pull/467) [`b48842e`](https://github.com/commercetools/test-data/commit/b48842e67aeec5faddc672b3412175adb1c1d42b) Thanks [@Rhotimee](https://github.com/Rhotimee)! - This package provides the data model for `Organization` and `Team`.

  ```ts
  import {
    Organization,
    McOrganization,
    Team,
    type TOrganization,
    type TMcOrganization,
    type TTeam,
  } from '@commercetools-test-data/organization';

  const organization = Organization.random().buildGraphql<TOrganization>();
  const mcOrganization =
    McOrganization.random().buildGraphql<TMcOrganization>();
  const team = Team.random().buildGraphql<TTeam>();
  ```

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.4.0
  - @commercetools-test-data/graphql-types@7.4.0
  - @commercetools-test-data/commons@7.4.0
  - @commercetools-test-data/user@7.4.0
  - @commercetools-test-data/utils@7.4.0
