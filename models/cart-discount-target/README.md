# @commercetools-test-data/cart-discount-target

This package provides the data model for the commercetools platform cart discount target types

https://docs.commercetools.com/api/projects/cartDiscounts#cartdiscounttarget

# Install

```bash
$ yarn add -D @commercetools-test-data/cart-discount-target
```

## TODO: refactor README

# Usage

## `Address`

```ts
import {
  Address,
  AddressDraft,
  type TAddress,
  type TAddressDraft,
} from '@commercetools-test-data/commons';

const address = Address.random().build<TAddress>();
const addressDraft = AddressDraft.random().build<TAddressDraft>();
```

## `LocalizedString`

```ts
import {
  LocalizedString,
  type TLocalizedString,
} from '@commercetools-test-data/commons';

const name = LocalizedString.random().build<TLocalizedString>();

// Presets
const emptyName = LocalizedString.presets.empty().build<TLocalizedString>();
```

## `Reference`

```ts
import { Reference, type TReference } from '@commercetools-test-data/commons';

const productRef = Reference.random()
  .typeId('product')
  .build<TReference<'product'>>();

// Presets
const categoryRef = Reference.presets
  .category()
  .build<TReference<'category'>>();
```

## `KeyReference`

```ts
import {
  KeyReference,
  type TKeyReference,
} from '@commercetools-test-data/commons';

const productKeyRef = KeyReference.random()
  .typeId('product')
  .build<TKeyReference<'product'>>();
```
