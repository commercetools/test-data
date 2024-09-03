# @commercetools-test-data/platform-limits

This package provides the data model for the commercetools platform `Limits` type

https://docs.commercetools.com/api/limits

# Install

```bash
$ pnpm add -D @commercetools-test-data/platform-limits
```

# Usage

- [BusinessUnitLimitsProjection](#businessunitlimitsprojection)<br>
- [CartDiscountLimitsProjection](#cartdiscountlimitsprojection)<br>
- [CartLimitsProjection](#cartlimitsprojection)<br>
- [CustomerLimitsProjection](#customerlimitsprojection)<br>
- [CustomerGroupLimitsProjection](#customergrouplimitsprojection)<br>
- [PlatformLimits](#platformlimits)<br>
- [LimitWithCurrent](#limitwithcurrent)<br>
- [ProductDiscountLimitsProjection](#productdiscountlimitsprojection)<br>
- [ShippingMethodLimitsProjection](#shippingmethodlimitsprojection)<br>
- [ShoppingListLimitsProjection](#shoppinglistlimitsprojection)<br>
- [StoreLimitsProjection](#storelimitsprojection)<br><br>
- [TaxCategoryLimitsProjection](#taxcategorylimitsprojection)<br>
- [ZoneLimitsProjection](#zonelimitsprojection)

## `BusinessUnitLimitsProjection`

```ts
import {
  BusinessUnitLimitsProjection,
  type TBusinessUnitLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const businessUnitLimitsProjection =
  BusinessUnitLimitsProjection.random().build<TBusinessUnitLimitsProjection>();

// Presets
const BusinessUnitWithLimit = businessUnitLimitsProjection.presets
  .withLimit()
  .build<TBusinessUnitLimitsProjection>();
```

## `CartDiscountLimitsProjection`

```ts
import {
  CartDiscountLimitsProjection,
  type TCartDiscountLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const cartDiscountLimitsProjection =
  CartDiscountLimitsProjection.random().build<TCartDiscountLimitsProjection>();

// Presets
const cartDiscountLimitsProjectionWithLimitAndCurrent =
  CartDiscountLimitsProjection.presets
    .withLimitAndCurrent()
    .build<TCartDiscountLimitsProjection>();
```

## `CartLimitsProjection`

```ts
import {
  CartLimitsProjection,
  type TCartLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const cartLimitsProjection =
  CartLimitsProjection.random().build<TCartLimitsProjection>();

// Presets
const cartLimitsProjectionWithLimitAndCurrent = CartLimitsProjection.presets
  .withLimitAndCurrent()
  .build<TCartLimitsProjection>();
```

## `CustomerLimitsProjection`

```ts
import {
  CustomerLimitsProjection,
  type TCustomerLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const customerLimitsProjection =
  CustomerLimitsProjection.random().build<TCustomerLimitsProjection>();

// Presets
const customerLimitsProjectionWithLimitAndCurrent =
  CustomerLimitsProjection.presets
    .withLimitAndCurrent()
    .build<TCustomerLimitsProjection>();
```

## `CustomerGroupLimitsProjection`

```ts
import {
  CustomerGroupLimitsProjection,
  type TCustomerGroupLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const customerGroupLimitsProjection =
  CustomerGroupLimitsProjection.random().build<TCustomerGroupLimitsProjection>();

// Presets
const customerGroupLimitsProjectionWithLimitAndCurrent =
  CustomerGroupLimitsProjection.presets
    .withLimitAndCurrent()
    .build<TCustomerGroupLimitsProjection>();
```

## `PlatformLimits`

```ts
import {
  PlatformLimits,
  type TPlatformLimits,
} from '@commercetools-test-data/platform-limits';

const PlatformLimits = PlatformLimits.random().build<TPlatformLimits>();

// Presets
const PlatformLimitsWithLimitAndCurrent = PlatformLimits.presets
  .withAllPlatformLimits()
  .build<TPlatformLimits>();
```

## `LimitWithCurrent`

```ts
import {
  LimitWithCurrent,
  type TLimitWithCurrent,
} from '@commercetools-test-data/platform-limits';

const limitWithCurrent = LimitWithCurrent.random().build<TLimitWithCurrent>();

// Presets
const limitWithCurrentWithExceeded = LimitWithCurrent.presets
  .withExceeded()
  .build<TLimitWithCurrent>();
const limitWithCurrentWithNonExceeded = LimitWithCurrent.presets
  .withNonExceeded()
  .build<TLimitWithCurrent>();
const limitWithCurrentWithUndefined = LimitWithCurrent.presets
  .withUndefined()
  .build<TLimitWithCurrent>();
const limitWithCurrentWithWarningExceeded = LimitWithCurrent.presets
  .withWarningExceeded()
  .build<TLimitWithCurrent>();
```

## `ProductDiscountLimitsProjection`

```ts
import {
  ProductDiscountLimitsProjection,
  type TProductDiscountLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const productDiscountLimitsProjection =
  ProductDiscountLimitsProjection.random().build<TProductDiscountLimitsProjection>();

// Presets
const productDiscountLimitsProjectionWithLimitAndCurrent =
  ProductDiscountLimitsProjection.presets
    .withLimitAndCurrent()
    .build<TProductDiscountLimitsProjection>();
```

## `ShippingMethodLimitsProjection`

```ts
import {
  ShippingMethodLimitsProjection,
  type TShippingMethodLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const shippingMethodLimitsProjection =
  ShippingMethodLimitsProjection.random().build<TShippingMethodLimitsProjection>();

// Presets
const shippingMethodLimitsProjectionWithLimitAndCurrent =
  ShippingMethodLimitsProjection.presets
    .withLimitAndCurrent()
    .build<TShippingMethodLimitsProjection>();
```

## `ShoppingListLimitsProjection`

```ts
import {
  ShoppingListLimitsProjection,
  type TShoppingListLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const ShoppingListLimitsProjection =
  ShoppingListLimitsProjection.random().build<TShoppingListLimitsProjection>();

// Presets
const ShoppingListLimitsProjectionWithLimitAndCurrent =
  ShoppingListLimitsProjection.presets
    .withLimitAndCurrent()
    .build<TShoppingListLimitsProjection>();
```

## `StoreLimitsProjection`

```ts
import {
  StoreLimitsProjection,
  type TStoreLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const StoreLimitsProjection =
  StoreLimitsProjection.random().build<TStoreLimitsProjection>();

// Presets
const StoreLimitsProjectionWithLimitAndCurrent = StoreLimitsProjection.presets
  .withLimitAndCurrent()
  .build<TStoreLimitsProjection>();
```

## `TaxCategoryLimitsProjection`

```ts
import {
  TaxCategoryLimitsProjection,
  type TTaxCategoryLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const taxCategoryLimitsProjection =
  TaxCategoryLimitsProjection.random().build<TTaxCategoryLimitsProjection>();

// Presets
const taxCategoryLimitsProjectionWithLimitAndCurrent =
  TaxCategoryLimitsProjection.presets
    .withLimitAndCurrent()
    .build<TTaxCategoryLimitsProjection>();
```

## `ZoneLimitsProjection`

```ts
import {
  ZoneLimitsProjection,
  type TZoneLimitsProjection,
} from '@commercetools-test-data/platform-limits';

const zoneLimitsProjection =
  ZoneLimitsProjection.random().build<TZoneLimitsProjection>();

// Presets
const zoneLimitsProjectionWithLimitAndCurrent = ZoneLimitsProjection.presets
  .withLimitAndCurrent()
  .build<TZoneLimitsProjection>();
```
