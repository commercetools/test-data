# @commercetools-test-data/organization

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
