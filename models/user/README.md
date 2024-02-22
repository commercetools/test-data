# @commercetools-test-data/user

This package provides the data model for the commercetools platform `User` type and the enhanced representation used by the Merchant Center API.

# Install

```bash
$ pnpm add -D @commercetools-test-data/user
```

# Usage

The package provides 2 type of models for User: one targeting to User of the CoCo API and one targeting the User of the Merchant Center API (prefixed by `Mc`).

```ts
import {
  // Coco
  User,
  UserDraft,
  type TUser,
  type TUserDraft,
  type TUserDraft,

  // MC
  McUser,
  McUserDraft,
  type TMcUser,
  type TMcUserDraft,
} from '@commercetools-test-data/user';

const user = User.random().buildRest<TUser>();
const userDraft = UserDraft.random().buildRest<TUserDraft>();
const userGraphQLDraft = UserDraft.random().buildGraphql<TUserDraft>();

const mcUser = McUser.random().buildRest<TMcUser>();
const mcUserDraft = McUserDraft.random().buildRest<TMcUserDraft>();
const mcUserGraphQLDraft = McUserDraft.random().buildGraphql<TMcUserDraft>();
```
