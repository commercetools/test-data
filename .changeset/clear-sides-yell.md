---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing two new `withAllFields` presets for the `DiscountedLisItemPortion` and `DiscountedLineItemPrice` that can be used to generate objects for those models with all the fields populated.

They both accept some params which allow to provide some key values used for the nested models.

Here are some examples on how they can be used:

```ts
import {
  DiscountedLineItemPriceGraphql,
  DiscountedLineItemPortionGraphql,
} from '@commercetools/composable-commerce-test-data/cart';

// DiscountedLineItemPrice

// When no param is provided we will use these values
//  - currencyCode: 'EUR'
//  - target: 'lineItems'
//  - discountId: 'cart-discount-id'
const discountedLineItemPrice =
  DiscountedLineItemPriceGraphql.presets.withAllFields();

// With some custom params
const discountedLineItemPriceCustomized =
  DiscountedLineItemPriceGraphql.presets.withAllFields({
    currencyCode: 'USD',
  });

// DiscountedLineItemPortionGraphql

// When no param is provided we will use these values
//  - currencyCode: 'EUR'
//  - discountId: 'cart-discount-id'
const discountedLineItemPortion =
  DiscountedLineItemPortionGraphql.presets.withAllFields();

// With some custom params
const discountedLineItemPriceCustomized =
  DiscountedLineItemPriceGraphql.presets.withAllFields({
    discountId: 'discount-XZV',
  });
```

We've also updated the `withAllFields` preset in the `LineItem` test data model so we make sure the `variant` property value that is generated with one boolean attribute filled in its attributes list property.
