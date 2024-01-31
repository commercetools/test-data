# @commercetools-test-data/user

This package provides the data model for `User` from the COCO API.

# Install

```bash
$ pnpm add -D @commercetools-test-data/user
```

# Usage

```ts
import {
  User,
  UserDraft,
  type TUser,
  type TUserDraft,
  type TUserDraftGraphql,
} from '@commercetools-test-data/project';

const user = User.random().buildRest<TUser>();
const userDraft = UserDraft.random().buildRest<TUserDraft>();
const userGraphQLDraft = UserDraft.random().buildGraphql<TUserDraftGraphql>();
```
