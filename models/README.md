# `@commercetools-test-data/commons`

This package provides the data model for the commercetools platform common types

https://docs.commercetools.com/api/types

## Install

```bash
$ yarn add -D @commercetools-test-data/commons
```

## Models

### `LocalizedString`

```ts
import type { TLocalizedString } from '@commercetools-test-data/commons';
import { LocalizedString } from '@commercetools-test-data/commons';

const name = LocalizedString.random().build<TLocalizedString>();
```
