# `@commercetools-test-data/utils`

This package provides the utils needed when you author your generators.

## Install

```bash
$ yarn add -D @commercetools-test-data/utils
```

## `createRelatedDates`

```ts
import { createRelatedDates } from '@commercetools-test-data/utils';
const [getOlderDate, getNewerDate] = createRelatedDates();
const generator = Generator<{ lastModifiedAt: string; createdAt: string }>({
  fields: {
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
  },
});
```
