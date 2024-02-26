# @commercetools-test-data/user

## 7.2.0

### Minor Changes

- [#466](https://github.com/commercetools/test-data/pull/466) [`1c41c10`](https://github.com/commercetools/test-data/commit/1c41c10a8973eaa6014010f31be713aaec7d018f) Thanks [@Rhotimee](https://github.com/Rhotimee)! - The package provides 2 type of models for Users: one targeting to User of the CoCo API and one targeting the User of the Merchant Center API (prefixed by `Mc`).

  ```ts
  import {
    // CoCo
    User,
    UserDraft,
    type TUser,
    type TUserDraft,

    // MC
    McUser,
    McUserDraft,
    type TMcUser,
    type TMcUserDraft,
  } from '@commercetools-test-data/user';

  const user = User.random().buildRest<TUser>();
  const userDraft = UserDraft.random().buildRest<TUserDraft>();

  const mcUser = McUser.random().buildGraphql<TMcUser>();
  const mcUserDraft = McUserDraft.random().buildGraphql<TMcUserDraft>();
  ```

### Patch Changes

- Updated dependencies [[`1c41c10`](https://github.com/commercetools/test-data/commit/1c41c10a8973eaa6014010f31be713aaec7d018f)]:
  - @commercetools-test-data/graphql-types@7.2.0
  - @commercetools-test-data/core@7.2.0
  - @commercetools-test-data/commons@7.2.0
  - @commercetools-test-data/project@7.2.0
  - @commercetools-test-data/utils@7.2.0
