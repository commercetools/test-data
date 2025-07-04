---
'@commercetools/composable-commerce-test-data': minor
---

### Additions

We're introducing some presets in `Cart` related test data models which should help consumers building objects.

#### LineItem

New `withAllFields` preset which populates all the model properties.
Example:

```ts
import { LineItemGraphql } from '@commercetools/composable-commerce-test-data/cart';

const fullModel = LineItemGraphql.presets.withAllFields();
```

#### TaxedPrice

New `withCurrency` preset which populates the `totalNet`, `totalGross` and `taxPortions` properties with `Money` objects using a specific currency code. `EUR` is used by default.
Example:

```ts
import { TaxedItemPrice } from '@commercetools/composable-commerce-test-data/cart';

const fullModel = TaxedItemPrice.presets.withAllFields();
```

### Updates

#### TaxedItemPrice

We're updating the existing `withAllFields` preset in the `TaxedItemPrice` test data model.
This preset was populating the `totalNet`, `totalGross`, `totalTax` and `taxPortions` with `Money` objects using always `EUR` as the `currencyCode`.
Now the preset allows consumers to provide a different currency code using `EUR` as its default.

### DiscountedLineItemPriceForQuantity

We're adjusting the way the `quantity` property is populated. This property represents "_Number of Line Items or Custom Line Items in the Cart_" (https://docs.commercetools.com/api/projects/carts#discountedlineitempriceforquantity) but we were using any integer value which was yielding values like 12342423, which does not make sense.
Now we populate this property by default with a number between 1 and 10.
