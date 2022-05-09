# `@commercetools-test-data/commons`

This package provides the data model for the commercetools platform common types

https://docs.commercetools.com/api/types

## Install

```bash
$ yarn add -D @commercetools-test-data/commons
```

## Models

### `Address`

```ts
import { Address, type TAddress } from '@commercetools-test-data/commons';

const address = Address.random().build<TAddress>();
```

#### Presets

**draft**

```ts
import { Address, type TAddress } from '@commercetools-test-data/commons';

const addressDraft = Address.presets.draft().build<TAddress>();
```

### `LocalizedString`

```ts
import {
  LocalizedString,
  type TLocalizedString,
} from '@commercetools-test-data/commons';

const name = LocalizedString.random().build<TLocalizedString>();
```

#### Presets

**empty**

```ts
import {
  LocalizedString,
  type TLocalizedString,
} from '@commercetools-test-data/commons';

const emptyName = LocalizedString.presets.empty().build<TLocalizedString>();
```

### `Reference`

```ts
import { Reference, type TReference } from '@commercetools-test-data/commons';

const productRef = Reference.random()
  .typeId('product')
  .build<TReference<'product'>>();
```

#### Presets

**category**

```ts
import { Reference, type TReference } from '@commercetools-test-data/commons';

const categoryRef = Reference.presets
  .category()
  .build<TReference<'category'>>();
```
