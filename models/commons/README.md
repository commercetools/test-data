# @commercetools-test-data/commons

This package provides the data model for the commercetools platform common types

https://docs.commercetools.com/api/types

# Install

```bash
$ pnpm add -D @commercetools-test-data/commons
```

# Usage

- [Address](#address)<br>
- [CentPrecisionMoney](#centprecisionmoney)<br>
- [ClientLogging](#clientlogging)<br>
- [KeyReference](#keyreference)<br>
- [LocalizedString](#localizedstring)<br>
- [Money](#money)<br>
- [Price](#price)<br>
- [Reference](#reference)<br>

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

# CentPrecisionMoney

```ts
import {
  CentPrecisionMoney,
  CentPrecisionMoneyDraft,
  type TCentPrecisionMoney,
  type TCentPrecisionMoneyDraft,
} from '@commercetools-test-data/commons';

const centPrecisionMoney =
  CentPrecisionMoney.random().build<TCentPrecisionMoney>();
const centPrecisionMoneyDraft =
  CentPrecisionMoneyDraft.random().build<TCentPrecisionMoneyDraft>();
```

# ClientLogging

```ts
import {
  ClientLogging,
  type TClientLogging,
} from '@commercetools-test-data/commons';
const clientLogging = ClientLogging.random().build<TClientLogging>();
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

## `Money`

```ts
import { Money, type TMoney } from '@commercetools-test-data/money';

const Money = Money.random().build<TMoney>();
```

## `Price`

```ts
import {
  Price,
  PriceDraft,
  type TPrice,
  type TPriceDraft,
} from '@commercetools-test-data/commons';

const price = Price.random().build<TPrice>();
const priceDraft = PriceDraft.random().build<TPriceDraft>();
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
