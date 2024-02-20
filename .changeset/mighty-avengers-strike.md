---
'@commercetools-test-data/user': minor
---

The package provides 2 type of models for Users: one targeting to User of the CoCo API and one targeting the User of the Merchant Center API (prefixed by `Mc`).

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
