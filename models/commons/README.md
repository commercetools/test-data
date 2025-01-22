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
- [DiscountedLineItemPortion](#dicountedlineitemportion)<br>
- [DiscountedLineItemPrice](#discountedlineitemprice)<br>
- [HighPrecisionMoney](#highprecisionmoney)<br>
- [KeyReference](#keyreference)<br>
- [LocalizedString](#localizedstring)<br>
- [Money](#money)<br>
- [Price](#price)<br>
- [Reference](#reference)<br>
- [PriceTier](#pricetier)<br>

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

# DiscountedLineItemPortion

```ts
import {
  DiscountedLineItemPortionRest,
  DiscountedLineItemPortionDraftRest,
  DiscountedLineItemPortionGraphql,
  DiscountedLineItemPortionDraftGraphql,
} from '@commercetools-test-data/commons';

const restDiscountedLineItemPortion = \
  DiscountedLineItemPortionRest.random().build();
const restDiscountedLineItemPortionDraft =
  DiscountedLineItemPortionDraftRest.random().build();

const graphqlDiscountedLineItemPortion =
  DiscountedLineItemPortionGraphql.random().build();
const graphqlDiscountedLineItemPortionDraft =
  DiscountedLineItemPortionDraftGraphql.random().build();
```

# DiscountedLineItemPrice

```ts
import {
  DiscountedLineItemPriceRest,
  DiscountedLineItemPriceGraphql,
} from '@commercetools-test-data/commons';

const restDiscountedLineItemPrice = \
  DiscountedLineItemPriceRest.random().build();
const restDiscountedLineItemPriceDraft =
  DiscountedLineItemPriceDraftRest.random().build();
```

# HighPrecisionMoney

```ts
import {
  HighPrecisionMoney,
  HighPrecisionMoneyDraft,
  type THighPrecisionMoney,
  type THighPrecisionMoneyDraft,
} from '@commercetools-test-data/commons';

const highPrecisionMoney =
  HighPrecisionMoney.random().build<THighPrecisionMoney>();
const highPrecisionMoneyDraft =
  HighPrecisionMoneyDraft.random().build<THighPrecisionMoneyDraft>();
```

## `KeyReference`

```ts
import {
  KeyReference,
  KeyReferenceDraft,
  type TKeyReference,
  type TKeyReferenceDraft,
} from '@commercetools-test-data/commons';

const productKeyRef = KeyReference.random()
  .typeId('product')
  .build<TKeyReference<'product'>>();
const productKeyRefDraft = KeyReferenceDraft.random()
  .typeId('product')
  .build<TKeyReferenceDraft<'product'>>();
```

## `LocalizedString`

```ts
import {
  LocalizedString,
  LocalizedStringDraft,
  type TLocalizedString,
  type TLocalizedStringDraft,
} from '@commercetools-test-data/commons';

const name = LocalizedString.random().build<TLocalizedString>();
const nameDraft = LocalizedStringDraft.random().build<TLocalizedString>();

// Presets
const emptyName = LocalizedString.presets.empty().build<TLocalizedString>();
const emptyNameDraft = LocalizedStringDraft.presets
  .empty()
  .build<TLocalizedStringDraft>();
```

## `Money`

```ts
import {
  Money,
  MoneyDraft,
  type TMoney,
  type TMoneyDraft,
} from '@commercetools-test-data/money';

const Money = Money.random().build<TMoney>();
const MoneyDraft = MoneyDraft.random().build<TMoneyDraft>();
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
import {
  Reference,
  ReferenceRest,
  ReferenceGraphql,
  ReferenceDraft,
  ReferenceDraftRest,
  ReferenceDraftGraphql,
  type TReference,
  type TReferenceDraft,
} from '@commercetools-test-data/commons';

// DEPRECATED. Please use one of the methods below
const productRef = Reference.random()
  .typeId('product')
  .build<TReference<'product'>>();
const restProductRef = ReferenceRest.random().
  .typeId('product')
  .build();
const graphqlProductRef = ReferenceGraphql.random().
  .typeId('product')
  .build();

// DEPRECATED. Please use one of the methods below
const productRefDraft = ReferenceDraft.random()
  .typeId('product')
  .build<TReferenceDraft<'product'>>();
const restProductRefDraft = ReferenceDraftRest.random().
  .typeId('product')
  .build();
const graphqlProductRefDraft = ReferenceDraftGraphql.random().
  .typeId('product')
  .build();


// Presets
const restCategoryRef = ReferenceRest.presets
  .category()
  .build();
const graphqlCategoryRefDraft = ReferenceDraftGraphql.presets
  .category()
  .build();
```

## `PriceTier`

```ts
import { PriceTier, type TPriceTier } from '@commercetools-test-data/commons';

const productRef = PriceTier.random().build<TPriceTier>();

// Presets
const categoryRef = PriceTier.presets.build<TPriceTier>();
```

## `DiscountedPrice`

```ts
import {
  DiscountedPriceRest,
  DiscountedPriceGraphql,
  DiscountedPriceDraftRest,
  DiscountedPriceDraftGraphql,
  type TDiscountedPriceRest,
  type TDiscountedPriceGraphql,
  type TDiscountedPriceDraftRest,
  type TDiscountedPriceDraftGraphql,
} from '@commercetools-test-data/commons';

const DiscountedPriceRest = DiscountedPriceRest.random().build();
const DiscountedPriceGraphql = DiscountedPriceGraphql.random().build();
const DiscountedPriceDraftRest = DiscountedPriceDraftRest.random().build();
const DiscountedPriceDraftGraphql =
  DiscountedPriceDraftGraphql.random().build();
```
