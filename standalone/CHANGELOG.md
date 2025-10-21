# @commercetools/composable-commerce-test-data

## 13.10.0

### Minor Changes

- [#983](https://github.com/commercetools/test-data/pull/983) [`b0f9eb8`](https://github.com/commercetools/test-data/commit/b0f9eb826d8836d8d52aad2a38ca85923d9904e6) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing a new model named `OrderDetailView` can be consumed from the `@commercetools/composable-commerce-test-data/my-view` entry point.

  There's only a GraphQL version for this model as it only exists in the MC Settings services which only expose a GraphQL API.

  This is how the new model could be used:

  ```ts
  import { OrderDetailViewGraphql } from '@commercetools/composable-commerce-test-data/my-view';

  const orderDetailView = OrderDetailViewGraphql.random().build();
  ```

## 13.9.0

### Minor Changes

- [#976](https://github.com/commercetools/test-data/pull/976) [`62026f2`](https://github.com/commercetools/test-data/commit/62026f2c01369b28067488cf860e04ac1fa7186c) Thanks [@krishhna123](https://github.com/krishhna123)! - We're introducing new models named, `day-of-month-schedule`, `day-of-month-schedule-draft`, and `day-of-month-schedule-input`. All these modules can be consumed from the `@commercetools/composable-commerce-test-data/recurring-order` entry point.

  This is how new models could be used:

  ```ts
  import {
      DayOfMonthScheuleRest,
      DayOfMonthScheduleGraphql,
      DayOfMonthScheduleDraft,
      DayOfMonthScheuleInput
  } from '@commercetools/composable-commerce-test-data/recurring-order';

  // rest models
  const dayOfMonthScheduleDraft = DayOfMonthScheduleDraft.random().build();,
  const dayOfMonthScheuleRest = DayOfMonthScheuleRest.random().build();

  // graphql models
  const dayOfMonthScheuleInput = DayOfMonthScheuleInput.random().build();
  const dayOfMonthScheduleGraphql = DayOfMonthScheduleGraphql.random().build();
  ```

### Patch Changes

- [#982](https://github.com/commercetools/test-data/pull/982) [`dca5318`](https://github.com/commercetools/test-data/commit/dca5318a9c3e6dfecd3e2197996db608ab90bc69) Thanks [@rajrdk](https://github.com/rajrdk)! - We've identified some models where the default dates that were used to populate some of their fields where not always accurate. The returned default values were past dates instead of a future ones.

  These are the affected models and the properties:
  - `InventoryEntryDraft.expectedDelivery`
  - `RecurringOrderDraft.startsAt`

- [#981](https://github.com/commercetools/test-data/pull/981) [`b6112e2`](https://github.com/commercetools/test-data/commit/b6112e2660db7c88d6701094e25f8d57e2e2aa04) Thanks [@rajrdk](https://github.com/rajrdk)! - Fixed an error with both `Price` and `PriceDraft` models causing the default value for the `validUntil` property to not be a string representation of a future date.

  Now that default value will always represent a date one year ahead.

## 13.8.3

### Patch Changes

- [#977](https://github.com/commercetools/test-data/pull/977) [`1b76a63`](https://github.com/commercetools/test-data/commit/1b76a638efaab29b3b2cef0472de8de272ea0d77) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We've migrated the `Zone` and `ZoneDraft` models to the new implementation patterns.

  This change does not have any impact on consumers, however the `Zone` and `ZoneDraft` models are now deprecated and you're expected to start using the `ZoneGraphql`, `ZoneRest`, `ZoneDraftGraphql` or `ZoneDraftRest` models instead depending of the type of API you're mocking.

  ```ts
  import {
    ZoneGraphql,
    ZoneRest,
    ZoneDraftRest,
    ZoneDraftGraphql,
  } from '@commercetools/composable-commerce-test-data/zone';

  const graphqlZone = ZoneGraphql.random().build();
  const restZone = ZoneRest.random().build();

  const graphqlZoneDraft = ZoneDraftGraphql.random().build();
  const restZoneDraft = ZoneDraftRest.random().build();
  ```

- [#978](https://github.com/commercetools/test-data/pull/978) [`9cf1001`](https://github.com/commercetools/test-data/commit/9cf10017965c3fce06c6e2305c12ed32e4587806) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Fixed an issue with both the `Price` and `PriceDraft` models regarding the default value of their `validUntil` property as it was being populated with the current timestamp where it's expected to be a future timestamp instead.

## 13.8.2

### Patch Changes

- [#974](https://github.com/commercetools/test-data/pull/974) [`4da5a8c`](https://github.com/commercetools/test-data/commit/4da5a8cb2820476716578f2bc10ae12aa273e525) Thanks [@nima-ct](https://github.com/nima-ct)! - Fix zone rate models exports

  The shipping-method index was using aliased wildcard exports (`export * as ZoneRate`) for zone rate models and zone rate draft models.
  This fix replaces with direct named exports.

  ```ts
  import { ZoneRate } from '@commercetools/composable-commerce-test-data/shipping-method';

  // BEFORE
  const graphqlZoneRate = ZoneRate.ZoneRate.random();

  // AFTER
  const graphqlZoneRate = ZoneRate.random();
  ```

## 13.8.1

### Patch Changes

- [#971](https://github.com/commercetools/test-data/pull/971) [`bf111b2`](https://github.com/commercetools/test-data/commit/bf111b25038d9de819530b51a311aa9285db8133) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We've migrated the `AttributeGroup` model to the new implementation patterns.

  This change does not have any impact on consumers, however the `AttributeGroup` model is now deprecated and you're expected to start using the `AttributeGroupGraphql` or `AttributeGroupRest` models instead depending of the type of API you're mocking.

  ```ts
  import {
    AttributeGroupGraphql,
    AttributeGroupRest,
  } from '@commercetools/composable-commerce-test-data/attribute-group';

  const graphqlAttributeGroup = AttributeGroupGraphql.random().build();
  const restAttributeGroup = AttributeGroupRest.random().build();
  ```

- [#970](https://github.com/commercetools/test-data/pull/970) [`34fe95b`](https://github.com/commercetools/test-data/commit/34fe95b201a80288fe10e09da29dc8c5537ded90) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We've fixed an error in the `AttributeGroupDraft` test-data model as its name was not populated with a draft model.

  Also, we've updated the entry point of the `@commercetools/composable-commerce-test-data/attribute-group` package entry point so it also exports the `AttributeReference` model.
  It can be used like this:

  ```ts
  import {
    AttributeReferenceGraphql,
    AttributeReferenceRest,
  } from '@commercetools/composable-commerce-test-data/attribute-group';

  const graphqlModel = AttributeReferenceGraphql.random().build();
  const restModel = AttributeReferenceRest.random().build();
  ```

- [#973](https://github.com/commercetools/test-data/pull/973) [`55cf64b`](https://github.com/commercetools/test-data/commit/55cf64bd3f251d57602a7497322a8cca346ecc57) Thanks [@nima-ct](https://github.com/nima-ct)! - We've migrated the `ShippingMethod` model to the new implementation patterns.

  This change does not have any impact on consumers, however the `ShippingMethod` model is now deprecated and you're expected to start using the `ShippingMethodGraphql` or `ShippingMethodRest` models instead depending of the type of API you're mocking.

  ```ts
  import {
    ShippingMethodGraphql,
    ShippingMethodRest,
  } from '@commercetools/composable-commerce-test-data/shipping-method';

  const graphqlShippingMethod = ShippingMethodGraphql.random().build();
  const restShippingMethod = ShippingMethodRest.random().build();
  ```

  We've migrated the `ShippingMethodDraft` model to the new implementation patterns.

  This change does not have any impact on consumers, however the `ShippingMethodDraft` model is now deprecated and you're expected to start using the `ShippingMethodDraftGraphql` or `ShippingMethodDraftRest` models instead depending of the type of API you're mocking.

  ```ts
  import {
    ShippingMethodDraftGraphql,
    ShippingMethodDraftRest,
  } from '@commercetools/composable-commerce-test-data/shipping-method';

  const graphqlDraft = ShippingMethodDraftGraphql.random().build();
  const restDraft = ShippingMethodDraftRest.random().build();
  ```

- [#969](https://github.com/commercetools/test-data/pull/969) [`e85472b`](https://github.com/commercetools/test-data/commit/e85472bfb8491e9f86a1e8e8aad7df973b958f15) Thanks [@nima-ct](https://github.com/nima-ct)! - We've migrated the `ZoneRate` model to the new implementation patterns.

  This change does not have any impact on consumers, however the `ZoneRate` model is now deprecated and you're expected to start using the `ZoneRateGraphql` or `ZoneRateRest` models instead depending of the type of API you're mocking.

  ```ts
  import {
    ZoneRateGraphql,
    ZoneRateRest,
  } from '@commercetools/composable-commerce-test-data/shipping-method';

  const graphqlZoneRate = ZoneRateGraphql.random().build();
  const restZoneRate = ZoneRateRest.random().build();
  ```

  We've migrated the `ZoneRateDraft` model to the new implementation patterns.

  This change does not have any impact on consumers, however the `ZoneRateDraft` model is now deprecated and you're expected to start using the `ZoneRateDraftGraphql` or `ZoneRateDraftRest` models instead depending of the type of API you're mocking.

  ```ts
  import {
    ZoneRateDraftGraphql,
    ZoneRateDraftRest,
  } from '@commercetools/composable-commerce-test-data/shipping-method';

  const graphqlDraft = ZoneRateDraftGraphql.random().build();
  const restDraft = ZoneRateDraftRest.random().build();
  ```

## 13.8.0

### Minor Changes

- [#968](https://github.com/commercetools/test-data/pull/968) [`1561155`](https://github.com/commercetools/test-data/commit/15611556262c82017751417fbf7cfdf02364acfa) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Introduces the attribute-group-draft model and an empty preset; and the attribute-reference, which is used internally by attribute-group-draft.

  ```ts
  import {
    AttributeGroupDraftGraphql,
    AttributeGroupDraftRest,
  } from '@commercetools/composable-commerce-test-data/attribute-group';

  const graphqlModel = AttributeGroupDraftGraphql.random().build();

  const restModel = AttributeGroupDraftRest.random().build();

  // empty preset
  const emptyGraphqlModel = AttributeGroupDraftGraphql.presets.empty().build();

  const emptyRestModel = AttributeGroupDraftRest.presets.empty().build();
  ```

- [#967](https://github.com/commercetools/test-data/pull/967) [`0052689`](https://github.com/commercetools/test-data/commit/00526899a3c0d5af14885b61ccb20038e7982509) Thanks [@nima-ct](https://github.com/nima-ct)! - ## New Shipping Rate Price Tier Models

  We're introducing new shipping rate price tier models that provide support for mocking different types of shipping rate pricing tiers:

  ```ts
  import {
    CartClassificationPriceTierDraftRest,
    CartValuePriceTierDraftRest,
    CartScorePriceTierDraftRest,
  } from '@commercetools/composable-commerce-test-data/shipping-method';

  const cartClassificationTier =
    CartClassificationPriceTierDraftRest.random().build();
  const cartValueTier = CartValuePriceTierDraftRest.random().build();
  const cartScoreTier = CartScorePriceTierDraftRest.random().build();
  ```

  ```ts
  import {
    CartClassificationPriceTierGraphql,
    CartValuePriceTierGraphql,
    CartScorePriceTierGraphql,
  } from '@commercetools/composable-commerce-test-data/shipping-method';

  const cartClassificationTier =
    CartClassificationPriceTierGraphql.random().build();
  const cartValueTier = CartValuePriceTierGraphql.random().build();
  const cartScoreTier = CartScorePriceTierGraphql.random().build();
  ```

  ## Migrated Shipping Rate Model

  The shipping rate models have been migrated to the new model structure:

  ```ts
  import {
    ShippingRateRest,
    ShippingRateGraphql,
  } from '@commercetools/composable-commerce-test-data/shipping-method';

  const restShippingRate = ShippingRateRest.random().build();
  const graphqlShippingRate = ShippingRateGraphql.random().build();
  ```

  ## Migrated Shipping Rate Draft Model

  The shipping rate draft models have been migrated with enhanced preset support:

  ```ts
  import {
    ShippingRateDraftRest,
    ShippingRateDraftGraphql,
  } from '@commercetools/composable-commerce-test-data/shipping-method';

  const restDraft = ShippingRateDraftRest.random().build();
  const graphqlDraft = ShippingRateDraftGraphql.random().build();
  ```

### Patch Changes

- [#962](https://github.com/commercetools/test-data/pull/962) [`572ac19`](https://github.com/commercetools/test-data/commit/572ac197132e82c79b77b048ca4132402ff69631) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Updated the way constants are exported for the `ProductSelection` models.

  We were exporting them independently but we usually add them as part of the models instead.

  ```ts
  // BEFORE
  import {
    ProductSelectionGraphql,
    productSelectionMode as productSelectionModeConstants,
  } from '@commercetools/composable-commerce-test-data/product-selection';

  const productSelectionDraftInclusion = ProductSelectionGraphql.random()
    .mode(productSelectionModeConstants.Individual)
    .build();

  // AFTER
  import { ProductSelectionGraphql } from '@commercetools/composable-commerce-test-data/product-selection';

  const productSelectionDraftInclusion = ProductSelectionGraphql.random()
    .mode(ProductSelectionGraphql.constants.productSelectionMode.Individual)
    .build();
  ```

## 13.7.1

### Patch Changes

- [#960](https://github.com/commercetools/test-data/pull/960) [`0daf533`](https://github.com/commercetools/test-data/commit/0daf5337e63a6b130f5cd579a4070a2b767e434d) Thanks [@Rombelirk](https://github.com/Rombelirk)! - We've fixed the `__typename` field on the BusinessUnitsListView model (`BusinessUnitsListMyView` instead of `BusinessUnitsListView`).

## 13.7.0

### Minor Changes

- [#946](https://github.com/commercetools/test-data/pull/946) [`2435cdf`](https://github.com/commercetools/test-data/commit/2435cdfc9d6a75eee7a3688a919ee7aa02b1f68f) Thanks [@krishhna123](https://github.com/krishhna123)! - We're introducing new models named, `standard-schedule-draft`, `standard-schedule-input` and `recurrence-policy-schedule-input`. Also added rest models for `standard-schedule`, `counter`, `counterDraft`, `recurrence-policy`, `recurrence-policy-draft`, `recurring-order` and ` recurring-order-draft`. All these modules can be consumed from the `@commercetools/composable-commerce-test-data/recurring-order` entry point.

  This is how new models could be used:

  ```ts
  import {
    StandardScheduleDraftRest,
    StandardScheduleInputGraphql,
    RecurrencePolicyScheduleInputGraphql,
    CounterRest,
    CounterDraftRest,
    RecurrencePolicyRest,
    RecurrencePolicyDraftRest,
    RecurringOrderRest,
    RecurringOrderDraftRest,
  } from '@commercetools/composable-commerce-test-data/cart';

  // graphql models
  const graphqlStandardScheduleInput =
    StandardScheduleInputGraphql.random().build();
  const graphqlRecurrencePolicyScheduleInput =
    RecurrencePolicyScheduleInputGraphql.random().build();

  // rest models
  const restCounter = CounterRest.random().build();
  const restCounterDraft = CounterDraftRest.random().build();
  const restStandardScheduleDraft = StandardScheduleDraftRest.random().build();
  const restRecurrencePolicyDraft = RecurrencePolicyDraftRest.random().build();
  const restRecurrencePolicy = RecurrencePolicyRest.random().build();
  const restRecurringOrderDraft = RecurringOrderDraftRest.random().build();
  const restReccuringOrder = RecurringOrderRest.random().build();
  ```

## 13.6.0

### Minor Changes

- [#954](https://github.com/commercetools/test-data/pull/954) [`a04413c`](https://github.com/commercetools/test-data/commit/a04413cd2ac423334b4752502c9392c8e2460685) Thanks [@Rombelirk](https://github.com/Rombelirk)! - We're introducing a new model named `BusinessUnitsListView`, which can be consumed from the `@commercetools/composable-commerce-test-data/my-view` entry point.

  There's only a GraphQL version for this model as it only exists in the MC Settings service which only exposes a GraphQL API.

  This is how the new model could be used:

  ```
  import {
    BusinessUnitsListViewGraphql,
  } from '@commercetools/composable-commerce-test-data/my-view';
  const BusinessUnitsListView = BusinessUnitsListViewGraphql.random().build();
  ```

### Patch Changes

- [#958](https://github.com/commercetools/test-data/pull/958) [`86f2497`](https://github.com/commercetools/test-data/commit/86f2497016edb12121c85961e5928c58ed7f3812) Thanks [@nima-ct](https://github.com/nima-ct)! - Update types package and add missing lock property to Cart Model

## 13.5.0

### Minor Changes

- [#953](https://github.com/commercetools/test-data/pull/953) [`604f0c4`](https://github.com/commercetools/test-data/commit/604f0c46fd62dde1ed31fb272d17c81bb3493d1e) Thanks [@nima-ct](https://github.com/nima-ct)! - Add isActive field to discount group models and update inventory entry models with minCartQuantity and maxCartQuantity fields to match new platform SDK types

## 13.4.1

### Patch Changes

- [#948](https://github.com/commercetools/test-data/pull/948) [`14a1c9b`](https://github.com/commercetools/test-data/commit/14a1c9be42351a84c1829fa9a79561c9dd4b9444) Thanks [@ahmehri](https://github.com/ahmehri)! - We've migrated the `Project` model to the new implementation patterns.

  This change does not have any impact on consumers, however the `Project` model is now deprecated and you're expected to start using the `ProjectGraphql` or `ProjectRest` models instead depending of the type of API you're mocking.

  ```ts
  import {
    ProjectGraphql,
    ProjectRest,
  } from '@commercetools/composable-commerce-test-data/project';

  const projectGraphql = ProjectGraphql.random().build();
  const projectRest = ProjectRest.random().build();
  ```

- [#947](https://github.com/commercetools/test-data/pull/947) [`9b04119`](https://github.com/commercetools/test-data/commit/9b0411905c767f64199367e7fadaef0791a301e2) Thanks [@ahmehri](https://github.com/ahmehri)! - We've migrated the `Team` model to the new implementation patterns.

  This change does not have any impact on consumers, however the `Team` model is now deprecated and you're expected to start using the `TeamGraphql` or `TeamRest` models instead depending of the type of API you're mocking.

  ```ts
  import {
    TeamGraphql,
    TeamRest,
  } from '@commercetools/composable-commerce-test-data/organization';

  const teamGraphql = TeamGraphql.random().build();
  const teamRest = TeamRest.random().build();
  ```

## 13.4.0

### Minor Changes

- [#942](https://github.com/commercetools/test-data/pull/942) [`89a1d1d`](https://github.com/commercetools/test-data/commit/89a1d1d54f85fbc9170e60d3199c69b66ceca69c) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing a new test data model named `ImageDimensions` which can be consumed from the `@commercetools/composable-commerce-test-data/product` entry point.

  This is how it can be used:

  ```ts
  import {
    ImageDimensionsGraphql,
    ImageDimensionsRest,
    ImageDimensionsDraftGraphql,
    ImageDimensionsDraftRest,
  } from '@commercetools/composable-commerce-test-data/product';

  // Creating test data models
  const graphqlModel = ImageDimensionsGraphql.random()
    .type(CartDiscountTargetGraphql.constants.targetTypes.lineItems)
    .build();
  const restModel = ImageDimensionsRest.random()
    .type(CartDiscountTargetGraphql.constants.targetTypes.shipping)
    .build();

  // There are also some presets to generate test data models with
  // some specific sizes
  const thumbImageDimensionsGraphql =
    ImageDimensionsGraphql.presets.withThumbSize();
  const largeImageDimensionsRest = ImageDimensionsRest.presets.withLargeSize();
  ```

- [#945](https://github.com/commercetools/test-data/pull/945) [`888ba63`](https://github.com/commercetools/test-data/commit/888ba635d9c57c4abe08999749cc8c904d75aa25) Thanks [@dogayuksel](https://github.com/dogayuksel)! - We're introducing a new model named `QuotesListView`, which can be consumed from the `@commercetools/composable-commerce-test-data/my-view` entry point.

  There's only a GraphQL version for this model as it only exists in the MC Settings service which only exposes a GraphQL API.

  This is how the new model could be used:

  ```
  import {
    QuotesListViewGraphql,
  } from '@commercetools/composable-commerce-test-data/my-view';

  const quotesListView = QuotesListViewGraphql.random().build();
  ```

### Patch Changes

- [#943](https://github.com/commercetools/test-data/pull/943) [`96484ad`](https://github.com/commercetools/test-data/commit/96484ade5f7e3f477d1177c8f66d6316ac20d87d) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We've migrated the `Image` model to the new implementation patterns.

  This change does not have any impact on consumers, however the `Image` model is now deprecated and you're expected to start using the `ImageGraphql` or `ImageRest` models instead depending of the type of API you're mocking.

  ```ts
  import {
    ImageGraphql,
    ImageRest,
  } from '@commercetools/composable-commerce-test-data/product';

  const graphqlImage = ImageGraphql.random().build();
  const restImage = ImageRest.random().build();
  ```

## 13.3.0

### Minor Changes

- [#935](https://github.com/commercetools/test-data/pull/935) [`af86b6a`](https://github.com/commercetools/test-data/commit/af86b6aaf12fc4f50c58776aff46d33a9ee8033e) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing two new `withAllFields` presets for the `DiscountedLisItemPortion` and `DiscountedLineItemPrice` that can be used to generate objects for those models with all the fields populated.

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

- [#936](https://github.com/commercetools/test-data/pull/936) [`5da7c3f`](https://github.com/commercetools/test-data/commit/5da7c3fd287b4823fc85b49c1d082668dfda2516) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing two new test data models named `MethodTaxRate` and `MethodTaxedPrice` which can be consumed from the @commercetools/composable-commerce-test-data/cart entry point.

  This is how it can be used:

  ```ts
  import {
    MethodTaxRateGraphql,
    MethodTaxRateRest,
    MethodTaxedPriceGraphql,
    MethodTaxedPriceRest,
  } from '@commercetools/composable-commerce-test-data/cart';

  const methodTaxRateGraphqlModel = MethodTaxRateGraphql.random().build();
  const methodTaxRateRestModel = MethodTaxRateRest.random().build();

  const methodTaxesPriceGraphqlModel = MethodTaxedPriceGraphql.random().build();
  const methodTaxedPriceRestModel = MethodTaxedPriceRest.random().build();
  ```

- [#934](https://github.com/commercetools/test-data/pull/934) [`11c9f92`](https://github.com/commercetools/test-data/commit/11c9f92ea8114a2bffdeffc7419067f9ad31de66) Thanks [@bradd123](https://github.com/bradd123)! - We are introducing a new model named `PaymentInfo` that can be consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

  This is how the new model could be used:

  ```ts
  import {
    PaymentInfoRest,
    PaymentInfoGraphql,
  } from '@commercetools/composable-commerce-test-data/order';

  const restPaymentInfo = PaymentInfoRest.random().build();

  const graphqlPaymentInfo = PaymentInfoGraphql.random().build();
  ```

- [#933](https://github.com/commercetools/test-data/pull/933) [`50f92a0`](https://github.com/commercetools/test-data/commit/50f92a09e658ba4307203baa8b8dc41576aa5bfd) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing two new helper functions which helps generating GraphQL lists:
  - `buildLimitGraphqlList`
  - `buildCountGraphqlList`

  both in the `@commercetools/composable-commerce-test-data/core` entry point.

  When looking through the generated GraphQL types we've found we have two types of lists results:

  ```ts
  // Limit based
  export type TCtpInterfaceInteractionsRawResult = {
    __typename?: 'InterfaceInteractionsRawResult';
    limit?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    results: Array<TCtpInterfaceInteractionsRaw>;
    total: Scalars['Int']['output'];
  };

  // Count based
  export type TCtpInventoryEntryQueryResult = {
    __typename?: 'InventoryEntryQueryResult';
    count: Scalars['Int']['output'];
    exists: Scalars['Boolean']['output'];
    offset: Scalars['Int']['output'];
    results: Array<TCtpInventoryEntry>;
    total: Scalars['Long']['output'];
  };
  ```

  With these new two helpers, consumers have a more ergonomic way of building this type of results lists.

  Here's an example for a limit-based result list:

  ```ts
  import { buildLimitGraphqlList } from '@/core';
  import {
    AttributeDefinitionGraphql,
    type TAttributeDefinitionGraphql,
  } from '@commercetools/composable-commerce-test-data/product-type';

  const attributeDefinitionsResultGraphql = buildLimitGraphqlList<
    TAttributeDefinitionGraphql,
    'AttributeDefinitionResult'
  >(
    [
      AttributeDefinitionGraphql.presets.countryOfOrigin(),
      AttributeDefinitionGraphql.presets.size(),
    ],
    {
      __typename: 'AttributeDefinitionResult',
    }
  );
  ```

  Here's an example for a count-based result list:

  ```ts
  import { buildCountGraphqlList } from '@/core';
  import {
    InventoryEntryGraphql,
    type TInventoryEntryGraphql,
  } from '@commercetools/composable-commerce-test-data/inventory-entry';

  const inventoryEntriesResultGraphql = buildCountGraphqlList<
    TAttributeDefinitionGraphql,
    'InventoryEntryQueryResult'
  >(
    [
      InventoryEntryGraphql.random(),
      InventoryEntryGraphql.random(),
      InventoryEntryGraphql.random(),
    ],
    {
      __typename: 'InventoryEntryQueryResult',
    }
  );
  ```

- [#937](https://github.com/commercetools/test-data/pull/937) [`cab657f`](https://github.com/commercetools/test-data/commit/cab657f220b53d1f69a68df95fed161666434f50) Thanks [@bradd123](https://github.com/bradd123)! - We've migrated the `Money` model to the new implementation patterns.

  This change does not have any impact on consumers, however the `Money` model is now deprecated and you're expected to start using the `MoneyGraphql` or `MoneyRest` models instead depending of the type of API you're mocking.

  ```ts
  import { MoneyGraphql, MoneyRest } form '@commercetools/composable-commerce-test-data/commons';

  const graphqlMoney = MoneyGraphql.random().build();
  const restMoney = MoneyRest.random().build();
  ```

- [#927](https://github.com/commercetools/test-data/pull/927) [`baa8b9e`](https://github.com/commercetools/test-data/commit/baa8b9ede50959cbbec6a982ef35b4a1db62e6cc) Thanks [@Sarah4VT](https://github.com/Sarah4VT)! - We've migrated the `Location` model to the new implementation patterns.

  The model was populating the `state` property by default which goes against the rule of only populating required fields by default.
  We've changed that property to not be populated by default and also included a new preset which can be used when consumers need to generate a fully populated object.

  Example:

  ```ts
  import { LocationGraphql } from '@commercetools/composable-commerce-test-data/zone';

  const fullLocation = LocationGraphql.presets.withAllFields();
  ```

### Patch Changes

- [#938](https://github.com/commercetools/test-data/pull/938) [`ab632f3`](https://github.com/commercetools/test-data/commit/ab632f3c5671ab00eb818bdf53f9490cf9a0ce6d) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Updated the `@commercetools/platform-sdk` package to its latest version so we can use the most up-to-date Typescript generated types from commercetools REST APIs.

  Here's a list of the changes:
  - `Cart` model: included `priceRoundingMode` field.
  - `CartDraft` model: included `priceRoundingMode` field.
  - `DiscountGroup` model: included `type` field.
  - `InventoryEntry` model: included `reservationExpirationInMinutes` field.
  - `InventoryEntryDraft` model: included `reservationExpirationInMinutes` field.
  - `Order` model: included `priceRoundingMode` field.
  - `ProductProjection` model: included `attributesRaw` field.
  - `ProductTailoringAttribute` model: included `attributesRaw` field.
  - `ProjectExtension` model: included `isReducedReviewModifiedProductsPaginationEnabled` field.

- [#939](https://github.com/commercetools/test-data/pull/939) [`f04d1e6`](https://github.com/commercetools/test-data/commit/f04d1e64414faf1741bb399088b45005314956c5) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We've migrated the `Price` and `PriceDraft` models to the new implementation patterns.

  This change does not have any impact on consumers, however the migrated models are now deprecated and you're expected to start using the `PriceGraphql` or `PriceRest` models instead depending of the type of API you're mocking.

  You can use them like this:

  ```ts
  import {
    PriceRest,
    PriceGraphql,
    PriceDraftRest,
    PriceDraftGraphql,
  } from '@commercetools/composable-commerce-test-data/commons';

  const restPrice = PriceRest.random().build();
  const graphqlPrice = PriceGraphql.random().build();

  const restPriceDraft = PriceDraftRest.random().build();
  const graphqlPriceDraft = PriceDraftGraphql.random().build();
  ```

  We're also introducing a new sub-model for the `PriceDraft` one which is called `BaseMoneyDraft` and only exists in the GraphQL API.
  You can use it to set a specific `value` in a price draft.

  Example:

  ```ts
  import {
    BaseMoneyDraftGraphql,
    PriceDraftGraphql,
  } from '@commercetools/composable-commerce-test-data/commons';

  const graphqlPriceDraft = PriceDraftGraphql.random()
    .value(BaseMoneyDraftGraphql.presets.withAllFields({ currencyCode: 'USD' }))
    .build();
  ```

- [#932](https://github.com/commercetools/test-data/pull/932) [`8b68cdc`](https://github.com/commercetools/test-data/commit/8b68cdc8099612984010ae4e0029a6f9292b0843) Thanks [@krishhna123](https://github.com/krishhna123)! - We're introducing a new model named `DiscountCodeInfo` that can be consumed from the `@commercetools/composable-commerce-test-data/cart` entry point.

  This is how the new model could be used:

  ```ts
  import {
    DiscountCodeInfoRest,
    DiscountCodeInfoGraphql,
  } from '@commercetools/composable-commerce-test-data/cart';

  const restDiscountCodeInfo = DiscountCodeInfoRest.random().build();

  const graphqlDiscountCodeInfo = DiscountCodeInfoGraphql.random().build();
  ```

## 13.2.0

### Minor Changes

- [#920](https://github.com/commercetools/test-data/pull/920) [`0da7fca`](https://github.com/commercetools/test-data/commit/0da7fca849f19fa294ef91e5ced948ba4434630e) Thanks [@NickDevG](https://github.com/NickDevG)! - We've migrated the models `ShoppingList` and `ShoppingListDraft` to accommodate to the new implementation patterns.

  Also added `ShoppingListLineItemRest`, `ShoppingListLineItemGraphql`, `TextLineItemRest` and `TextLineItemGraphql` with their corresponding drafts under the same package.

- [#919](https://github.com/commercetools/test-data/pull/919) [`06af08c`](https://github.com/commercetools/test-data/commit/06af08c4fd51f01f82082b02372146d7211edee3) Thanks [@Sarah4VT](https://github.com/Sarah4VT)! - We're introducing a new test data model named `AttributeNestedType` that can be consumed from the `@commercetools/composable-commerce-test-data/product-type` entry point.

  This is how it could be used:

  ```ts
  import {
    AttributeNestedTypeGraphql,
    AttributeNestedTypeRest,
  } from '@commercetools/composable-commerce-test-data/product-type';

  const restModel = AttributeNestedTypeRest.random().build();
  const graphqlModel = AttributeNestedTypeGraphql.random().build();
  ```

- [#923](https://github.com/commercetools/test-data/pull/923) [`34b02c8`](https://github.com/commercetools/test-data/commit/34b02c81041d9899758c853f9b7d20fd1da8eafa) Thanks [@ragafus](https://github.com/ragafus)! - We're introducing two new models named `DiscountGroup` and `DiscountGroupDraft` that can be consumed from the `@commercetools/composable-commerce-test-data/discount-group` entry point.

  There's a REST (Composable commerce HTTP API) and a GraphQL (Composable Commerce GraphQL API) version for these two models.

  This is how the new models could be used:

  ```ts
  import {
    DiscountGroupGraphql,
    DiscountGroupRest,
    DiscountGroupDraftGraphql,
    DiscountGroupDraftRest,
  } from '@commercetools/composable-commerce-test-data/discount-group';

  const discountGroupGraphql = DiscountGroupGraphql.random().build();
  const discountGroupRest = DiscountGroupRest.random().build();
  const discountGroupDraftGraphql = DiscountGroupDraftGraphql.random().build();
  const discountGroupDraftRest = DiscountGroupDraftRest.random().build();
  ```

### Patch Changes

- [#922](https://github.com/commercetools/test-data/pull/922) [`2207273`](https://github.com/commercetools/test-data/commit/22072732ad70b0d8f5617600e6fe3a97a35913f6) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're adjusting the way we export the `Channel` data model builders.

  There was an inconsistency in the way the compatibility models where exported which allowed consumers wanting to use the `ChannelDraft` builder like this:

  ```
  import * as Channel from '@commercetools/composable-commerce-test-data/channel';

  const draftModel = Channel.ChannelDraft.random();
  ```

  After the refactor this is no longer possible and consumers should use the expected pattern:

  ```
  import { ChannelDraft } from '@commercetools/composable-commerce-test-data/channel';

  const draftModel = ChannelDraft.random();
  ```

- [#921](https://github.com/commercetools/test-data/pull/921) [`3dee1c2`](https://github.com/commercetools/test-data/commit/3dee1c2e1ecc038c8d46fac8ee987e4d72dc93df) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We've migrated the `AssociateRole` model to the new implementation patterns.

  The default object generated by this model was populating the `name` property which is not correct as that's an optional field so not the model won't populate it.

## 13.1.0

### Minor Changes

- [#916](https://github.com/commercetools/test-data/pull/916) [`0da2bcf`](https://github.com/commercetools/test-data/commit/0da2bcfb2b864acff635e07d04193a59a3e3c392) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing a new model named `OrdersListListView` can be consumed from the `@commercetools/composable-commerce-test-data/my-view` entry point.

  There's only a GraphQL version for this model as it only exists in the MC Settings services which only expose a GraphQL API.

  This is how the new model could be used:

  ```
  import {
    OrdersListViewGraphql,
  } from '@commercetools/composable-commerce-test-data/my-view';
  const ordersListView = OrdersListViewGraphql.random().build();
  ```

## 13.0.0

### Major Changes

- [#913](https://github.com/commercetools/test-data/pull/913) [`2a9426b`](https://github.com/commercetools/test-data/commit/2a9426b49a903cafee1e050bdb20620e62ac01e6) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're removing the **sample data presets** from the `ProductType` model.
  There are files we missed when we tried to remove all the sample data presets from this repository back in [this release](https://github.com/commercetools/test-data/releases/tag/%40commercetools%2Fcomposable-commerce-test-data%4012.0.0).

  Remember we now how a new package (`@commercetools/composable-commerce-test-data-sample-presets`) where you can find them should you need them.

### Minor Changes

- [#912](https://github.com/commercetools/test-data/pull/912) [`41fd2a1`](https://github.com/commercetools/test-data/commit/41fd2a1418d83999bd2f6d1c9f0a781962baba6d) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Three new models have been added related to MC Gateway `OAuthClient` entity:
  - `OAuthClient`
  - `OAuthScope`
  - `ProjectPermission`

  They all can be consumed from this new entry point: `@commercetools/composable-commerce-test-data/oauth-client`.

  They only have a GraphQL representation as the MC Gateway only exposes a GraphQL API.

  Here's an example of how to use them:

  ```ts
  import {
    OAuthClientGraphql,
    OAuthScopeGraphql,
    ProjectPermission,
  } from '@commercetools/composable-commerce-test-data/oauth-client';

  const oAuthClientModel = OAuthClientGraphql.random().permissions([
    ProjectPermissionGraphql.random().projectKey('my-project-key'),
  ]);

  const oAuthScopeModel = OAuthScopeGraphql.random().name(
    OAuthScopeGraphql.constants.presets.viewCategories
  );
  ```

- [#911](https://github.com/commercetools/test-data/pull/911) [`99a4e6c`](https://github.com/commercetools/test-data/commit/99a4e6c681c45d22879422954b1ab262dabf8a29) Thanks [@Sarah4VT](https://github.com/Sarah4VT)! - We're introducing a new preset in `ProductType` test data model called `tshirt` which should help consumers building objects.

  Here's an example on how it could be used:

  ```ts
  import { ProductTypeGraphql } from '@commercetools/composable-commerce-test-data/product-type';

  const tshirt = ProductTypeGraphql.presets.tshirt().build();
  ```

## 12.2.0

### Minor Changes

- [#906](https://github.com/commercetools/test-data/pull/906) [`edee5c4`](https://github.com/commercetools/test-data/commit/edee5c4845eaad6e7387625aad42bab8bb377596) Thanks [@Sarah4VT](https://github.com/Sarah4VT)! - We've included two new presets to the `State` model:
  - `packed`
  - `shipped`

  We've also took the opportunity to migrate both the `State` and `StateDraft` models to the new pattern.

  Here are examples on how the new presets can be consumed:

  ```ts
  import {
    StateGraphql,
    StateRest,
  } from '@commercetools/composable-commerce-test-data/state';

  const packedGraphqlModel = StateGraphql.presets.packed();
  const shippedRestModel = StateRest.presets.shipped();
  ```

- [#907](https://github.com/commercetools/test-data/pull/907) [`a9cd3ef`](https://github.com/commercetools/test-data/commit/a9cd3efbb9a6102e176141a40d0b7ecb85e38238) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - ### Additions

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

- [#902](https://github.com/commercetools/test-data/pull/902) [`e60b094`](https://github.com/commercetools/test-data/commit/e60b0944ed4c0eb12e4ac75409bc8806723f14c4) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing a new test data model named `ItemState` which can be consumed from the `@commercetools/composable-commerce-test-data/cart` entry point.

  This is how it can be used:

  ```ts
  import {
    ItemStateGraphql,
    ItemStateRest,
  } from '@commercetools/composable-commerce-test-data/cart';

  const graphqlModel = ItemStateGraphql.random().build();
  const restModel = ItemStateRest.random().build();
  ```

- [#903](https://github.com/commercetools/test-data/pull/903) [`1f51e6d`](https://github.com/commercetools/test-data/commit/1f51e6dcee338f90726c8f4c1a7582756865ee4f) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing a new test data model named `CartDiscountTarget` which can be consumed from the `@commercetools/composable-commerce-test-data/cart-discount` entry point.

  This is how it can be used:

  ```ts
  import {
    CartDiscountTargetGraphql,
    CartDiscountTargetRest,
  } from '@commercetools/composable-commerce-test-data/cart-discount';

  const graphqlModel = CartDiscountTargetGraphql.random()
    .type(CartDiscountTargetGraphql.constants.targetTypes.lineItems)
    .build();

  const restModel = CartDiscountTargetRest.random()
    .type(CartDiscountTargetGraphql.constants.targetTypes.shipping)
    .build();
  ```

- [#904](https://github.com/commercetools/test-data/pull/904) [`1730441`](https://github.com/commercetools/test-data/commit/1730441a73c14d652c255b4dbabb912a19150c4f) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing a new test data model named `SyncInfo` which can be consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

  [Here](https://docs.commercetools.com/api/projects/orders#syncinfo) are the official docs for this resource.

  This is how it can be used:

  ```ts
  import {
    SyncInfoGraphql,
    SyncInfoRest,
  } from '@commercetools/composable-commerce-test-data/order';

  const graphqlModel = SyncInfoGraphql.random().build();
  const restModel = SyncInfoRest.random().build();
  ```

### Patch Changes

- [#905](https://github.com/commercetools/test-data/pull/905) [`d111985`](https://github.com/commercetools/test-data/commit/d111985c9679c9a9a224b99b335676d7e8fbdf45) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We've migrated the `TaxRate` model to the new implementation patterns.

  This change does not have any impact on consumers.

## 12.1.0

### Minor Changes

- [#897](https://github.com/commercetools/test-data/pull/897) [`1295b54`](https://github.com/commercetools/test-data/commit/1295b54446c895f246326387ebdc80078ccbe15c) Thanks [@NickDevG](https://github.com/NickDevG)! - We've migrated the models `Order`, `OrderFromCartDraft` and `OrderFromQuoteDraft` to accommodate to the new implementation patterns.

  This change does not have any impact over consumers.

- [#896](https://github.com/commercetools/test-data/pull/896) [`732c4a0`](https://github.com/commercetools/test-data/commit/732c4a0a2805dcad8578cc2d7c971212abf81a7e) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing a new model named `VariantPricesListView` can be consumed from the `@commercetools/composable-commerce-test-data/my-view` entry point.

  There's only a GraphQL version for this model as it only exists in the MC Settings services which only expose a GraphQL API.

  This is how the new model could be used:

  ```
  import {
    VariantPricesListViewGraphql,
  } from '@commercetools/composable-commerce-test-data/my-view';

  const variantPricesListView = VariantPricesListViewGraphql.random().build();
  ```

### Patch Changes

- [#898](https://github.com/commercetools/test-data/pull/898) [`602b75a`](https://github.com/commercetools/test-data/commit/602b75a2a1829e76d06eaa2e2d98e83384215e1d) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Fixed `CustomFieldsRest` test data model as the default generated version was not populating the `fields` property but that's a required property.

  Now we populate it with an empty object.

## 12.0.0

### Major Changes

- [#885](https://github.com/commercetools/test-data/pull/885) [`65c738c`](https://github.com/commercetools/test-data/commit/65c738c890b4a780ad034c30ca228e1bc5c08152) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're removing all the **sample data presets** from the test data models:
  - sample-data-b2b
  - sample-data-b2c
  - sample-data-b2c-lifestyle
  - sample-data-fashion

  We now how a new package (`@commercetools/composable-commerce-test-data-sample-presets`) where you can find them should you need them.

## 11.8.0

### Minor Changes

- [#863](https://github.com/commercetools/test-data/pull/863) [`8199b6d`](https://github.com/commercetools/test-data/commit/8199b6d81f99fac6eeaf573bc61392aee377bb46) Thanks [@NickDevG](https://github.com/NickDevG)! - We're introducing a new models named `CustomFieldsRest`, `CustomFieldsGraphql` and `RawCustomFieldGraphql` that can be consumed from the `@commercetools/composable-commerce-test-data/custom-fields` entry point.

  This is how the new models could be used:

  ```ts
  import { CustomFieldsRest } from '@commercetools/composable-commerce-test-data/custom-fields';

  const model = CustomFieldsRest.random().build();
  ```

  ```ts
  import { CustomFieldsGraphql } from '@commercetools/composable-commerce-test-data/custom-fields';

  const model = CustomFieldsGraphql.random().build();
  ```

  ```ts
  import { RawCustomFieldGraphql } from '@commercetools/composable-commerce-test-data/custom-fields';

  const model = RawCustomFieldGraphql.random().build();
  ```

- [#863](https://github.com/commercetools/test-data/pull/863) [`8199b6d`](https://github.com/commercetools/test-data/commit/8199b6d81f99fac6eeaf573bc61392aee377bb46) Thanks [@NickDevG](https://github.com/NickDevG)! - We're introducing a new models named `ItemShippingDetailsGraphql`, `ItemShippingTargetGraphql` and `ShippingGraphql` that can be consumed from the `@commercetools/composable-commerce-test-data/cart` entry point.

  This is how the new models could be used:

  ```ts
  import { ItemShippingDetailsGraphql } from '@commercetools/composable-commerce-test-data/cart';

  const model = ItemShippingDetailsGraphql.random().build();
  ```

  ```ts
  import { ItemShippingTargetGraphql } from '@commercetools/composable-commerce-test-data/cart';

  const model = ItemShippingTargetGraphql.random().build();
  ```

  ```ts
  import { ShippingGraphql } from '@commercetools/composable-commerce-test-data/cart';

  const model = ShippingGraphql.random().build();
  ```

- [#892](https://github.com/commercetools/test-data/pull/892) [`56c2839`](https://github.com/commercetools/test-data/commit/56c28395efab71cc91b600c3b3faa624b30d1474) Thanks [@NickDevG](https://github.com/NickDevG)! - We've migrated the model `ReturnInfo` to accommodate to the new pattern.

  This change does not have any impact over consumers.

- [#891](https://github.com/commercetools/test-data/pull/891) [`eae27b1`](https://github.com/commercetools/test-data/commit/eae27b11e995230c553189ff2018c73eaeeb94d5) Thanks [@NickDevG](https://github.com/NickDevG)! - We've migrated the model `LineItemReturnItem` to accommodate to the new pattern.

  This change does not have any impact over consumers.

- [#894](https://github.com/commercetools/test-data/pull/894) [`c4fd290`](https://github.com/commercetools/test-data/commit/c4fd29030aea6fa08b874dce4256c6f93f1ceecb) Thanks [@NickDevG](https://github.com/NickDevG)! - We've migrated the model `Delivery` to accommodate to the new pattern.

  This change does not have any impact over consumers.

- [#883](https://github.com/commercetools/test-data/pull/883) [`967d6da`](https://github.com/commercetools/test-data/commit/967d6da4b4a59e199e9c60ad120137e7b30bec70) Thanks [@NickDevG](https://github.com/NickDevG)! - We've migrated the model `Parcel` to accommodate to the new pattern.

  This change does not have any impact over consumers.

## 11.7.0

### Minor Changes

- [#878](https://github.com/commercetools/test-data/pull/878) [`fe9833c`](https://github.com/commercetools/test-data/commit/fe9833c035f55e740b48741d2d20789ef001af22) Thanks [@NickDevG](https://github.com/NickDevG)! - We're migrating the model `TrackingData` that can be now consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

  This is how the migrated model could be used:

  ```ts
  import { TrackingDataGraphql } from '@commercetools/composable-commerce-test-data/order';

  const model = TrackingDataGraphql.random().build();
  ```

- [#880](https://github.com/commercetools/test-data/pull/880) [`d8b63b7`](https://github.com/commercetools/test-data/commit/d8b63b7cbbde269cb8f16e6f248ff478b80fe04d) Thanks [@NickDevG](https://github.com/NickDevG)! - We're migrating the model `ParcelMeasurements` that can be now consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

  This is how the migrated model could be used:

  ```ts
  import { ParcelMeasurementsGraphql } from '@commercetools/composable-commerce-test-data/order';

  const model = ParcelMeasurementsGraphql.random().build();
  ```

- [#879](https://github.com/commercetools/test-data/pull/879) [`78a867d`](https://github.com/commercetools/test-data/commit/78a867df92f2efc694d9c0512f596a19e633c493) Thanks [@NickDevG](https://github.com/NickDevG)! - We're migrating the model `DeliveryItem` that can be now consumed from the `@commercetools/composable-commerce-test-data/order` entry point.

  This is how the migrated model could be used:

  ```ts
  import { DeliveryItemGraphql } from '@commercetools/composable-commerce-test-data/order';

  const model = DeliveryItemGraphql.random().build();
  ```

### Patch Changes

- [#881](https://github.com/commercetools/test-data/pull/881) [`d9488ca`](https://github.com/commercetools/test-data/commit/d9488ca4a47784b1dfd2d0a661bd753fbea6df32) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're fixing the `CategoryDraft` model as it was populating the `slug` field incorrectly by default.
  It was including three slugs in three different languages (`de`, `en` and `fr`) but two of them were including spaces in the values, which is not allowed.

## 11.6.0

### Minor Changes

- [#864](https://github.com/commercetools/test-data/pull/864) [`297dadb`](https://github.com/commercetools/test-data/commit/297dadb77eab2baf456ffc057aa9aeacee7e90e3) Thanks [@krishhna123](https://github.com/krishhna123)! - We're introducing a new models named `RecurringOrder` and `Counter` that can be consumed from the `@commercetools/composable-commerce-test-data/recurring-order` entry point.

  Please note that we have added only `Graphql` models and `REST` models will be added once `Recurring Order` is available in Public Beta.

  This is how the new model could be used:

  ```ts
  import {
    RecurringOrderGraphql,
    RecurringOrderDraftGraphql,
    CounterGraphql,
    CounterDraftGraphql,
  } from '@commercetools/composable-commerce-test-data/recurring-order';

  const recurringOrder = RecurringOrderGraphql.random().build();
  const recurringOrderDraft = RecurringOrderDraftGraphql.random().build();

  const counter = CounterGraphql.random().build();
  const counterDraft = CounterDraftGraphql.random().build();
  ```

### Patch Changes

- [#871](https://github.com/commercetools/test-data/pull/871) [`8ee9cda`](https://github.com/commercetools/test-data/commit/8ee9cda7715874ac49720cd891360d16b942cd2f) Thanks [@nima-ct](https://github.com/nima-ct)! - Update SP and Price models with the right types for recurrence policy

- [#868](https://github.com/commercetools/test-data/pull/868) [`28cb834`](https://github.com/commercetools/test-data/commit/28cb83490ef81860755aafb2e0db5cf7debb16fe) Thanks [@mario-priceless](https://github.com/mario-priceless)! - We've updated the `Category` and `CategorySearch` test data models implementation to accommodate to the new patterns.

  This change does not have any impact in consumers.

- [#876](https://github.com/commercetools/test-data/pull/876) [`a64428b`](https://github.com/commercetools/test-data/commit/a64428b1be431fd138c54ad557aa71ad22896f84) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're updating the internal directory layout for the order models to facilitate their future migrations.

  This changes are transparent for consumers.

## 11.5.1

### Patch Changes

- [#866](https://github.com/commercetools/test-data/pull/866) [`cecd5d8`](https://github.com/commercetools/test-data/commit/cecd5d8df240c3aefb17244fccda88cbd27533a8) Thanks [@jaikamat](https://github.com/jaikamat)! - Update sample data (b2c - lifestyle) product type and product variant presets with additional configuration data.

## 11.5.0

### Minor Changes

- [#862](https://github.com/commercetools/test-data/pull/862) [`5f22918`](https://github.com/commercetools/test-data/commit/5f22918770c2ff5dd99efd20597fc2ee3b2f6b73) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're changing how the internal `postBuild` callback used in the models definitions work.
  You can read more about this function in [the docs](https://github.com/commercetools/test-data/blob/main/docs/contributing/test-data-models-overview.md#fields-config).

  This refactor is internal and does not have any impact in the consumers.

### Patch Changes

- [#865](https://github.com/commercetools/test-data/pull/865) [`578e856`](https://github.com/commercetools/test-data/commit/578e8563542dd259faef441baf827b8ede7eb13b) Thanks [@YahiaElTai](https://github.com/YahiaElTai)! - We're fixing a preset in the `StoreDraft` model where we were exporting a REST one instead of the expected compatibility one (`StoreDraft.presets.useLargeCustomers`).

## 11.4.0

### Minor Changes

- [#857](https://github.com/commercetools/test-data/pull/857) [`28047b3`](https://github.com/commercetools/test-data/commit/28047b3b5c1fc76b2f50df2de3c438339d682eab) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing a new model named `PimSearchListView` which is the first one associated with the "My views" Merchant Center functionality so we've created a new package entry point (`@commercetools/composable-commerce-test-data/my-view`) we can use to aggregate all the other use cases we will need in the future.

  This is how the new model could be used:

  ```ts
  import { PimSearchListViewGraphql } from '@commercetools/composable-commerce-test-data/my-view';

  const model = PimSearchListViewGraphql.random().build();
  ```

- [#853](https://github.com/commercetools/test-data/pull/853) [`3211242`](https://github.com/commercetools/test-data/commit/3211242cd8de6a1d2c17c8cdbcc1ce82aeebbf6c) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We've updated several models related to Custom Applications:
  - `CustomApplicationInstallation`: It now exports a `constants` property including values for different oAuth scopes.
  - `CustomApplicationInstallationPermissions`: It now exports a `constants` property including values for different oAuth scopes.
  - `CustomApplication`: The `constants` property was exporting the wrong values. We also change the default model to populate the minimal fields and include a new preset (`withAllFields`) which can be used for use cases when a fully populated object is needed.

- [#858](https://github.com/commercetools/test-data/pull/858) [`bac9f7c`](https://github.com/commercetools/test-data/commit/bac9f7cf98de637b357eb60d1d26691d3c03e608) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We're introducing a new model named `ProductVariantAvailability` that can be consumed from the `@commercetools/composable-commerce-test-data/product` entry point.

  This is how the new model could be used:

  ```ts
  import { ProductVariantAvailabilityGraphql } from '@commercetools/composable-commerce-test-data/product';

  const model = ProductVariantAvailabilityGraphql.random().build();
  ```

- [#861](https://github.com/commercetools/test-data/pull/861) [`5b09856`](https://github.com/commercetools/test-data/commit/5b0985641b890e57a9266724de99ab9c4938979d) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - We've migrated two models (`Store` and `ProductSelectionSetting`) both from the `@commercetools/composable-commerce-test-data/store` entry point to the new implementation patterns.

  This change is transparent for consumers.

- [#852](https://github.com/commercetools/test-data/pull/852) [`5777f16`](https://github.com/commercetools/test-data/commit/5777f1616360e22d238a6a064594fbad22f536d0) Thanks [@krishhna123](https://github.com/krishhna123)! - We're introducing a new models named `RecurrencePolicy` and `StandardSchedule` that can be consumed from the `@commercetools/composable-commerce-test-data/recurring-order` entry point.

  This is how the new model could be used:

  ```ts
  import {
    RecurrencePolicyDraftGraphql,
    RecurrencePolicyGraphql,
    StandardScheduleGraphql,
  } from '@commercetools/composable-commerce-test-data/recurring-order';

  const recurrencePolicy = RecurrencePolicyDraftGraphql.random().build();
  const recurrencePolicyDraft = RecurrencePolicyDraftGraphql.random().build();

  const standardSchedule = StandardScheduleGraphql.random().build();
  ```

## 11.3.0

### Minor Changes

- [#854](https://github.com/commercetools/test-data/pull/854) [`e4f2733`](https://github.com/commercetools/test-data/commit/e4f273347ad5bd68d8aea420e7244ec6d7114037) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Migrated test-data models related to Organization extensions to the new implementation patterns.
  Included models:
  - `ContactInformation`
  - `OidcSsoConfig`
  - `OrganizationExtension`

  The main change is that the default `OrganizationExtension` model was populating all its fields and that's not what consumers were expecting so we changed it to populate only the required ones.
  On top of that, there's a new preset available (`OrganizationExtension.presets.withAllFields`) that can be use to generate a fully populated model object.

### Patch Changes

- [#856](https://github.com/commercetools/test-data/pull/856) [`ba38257`](https://github.com/commercetools/test-data/commit/ba38257f96fe293a002b2b97831b6ac9c4a8c65a) Thanks [@ragafus](https://github.com/ragafus)! - Export CartDiscountTotalPriceTarget and CartDiscountMultiBuyCustomLineItemsTarget models

## 11.2.1

### Patch Changes

- [#848](https://github.com/commercetools/test-data/pull/848) [`baee8c9`](https://github.com/commercetools/test-data/commit/baee8c9711e510736d7eb196e954cd59edac312d) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Fixed the `@commercetools/composable-commerce-test-data/product` entry point to export again the `ProductType` test data models Typescript types which were removed by accident.

- [#851](https://github.com/commercetools/test-data/pull/851) [`5499be5`](https://github.com/commercetools/test-data/commit/5499be502aeaee6b4ec9fca0d11cc70e9c44a625) Thanks [@YahiaElTai](https://github.com/YahiaElTai)! - ensure constants being exported from models

## 11.2.0

### Minor Changes

- [#844](https://github.com/commercetools/test-data/pull/844) [`1d9ab2f`](https://github.com/commercetools/test-data/commit/1d9ab2f0d8264f5e3c8015e4e004ea388ace5d78) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Updated the `Product` test model so it does not populate the `taxCategory` property by default. That's an optional property and so the default version of the model should not populate it.

- [#846](https://github.com/commercetools/test-data/pull/846) [`aa13349`](https://github.com/commercetools/test-data/commit/aa133494c239237ad22aaae489cb403096e54354) Thanks [@mario-priceless](https://github.com/mario-priceless)! - Updated the `ProductData` and `ProductDraft` test models so it does not populate the `categories` property by default. That's an optional property and so the default version of the model should not populate it.

- [#834](https://github.com/commercetools/test-data/pull/834) [`c87387c`](https://github.com/commercetools/test-data/commit/c87387c1ca258410940d2d2dbb0f60a2a329eb56) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Migrated the `ProductType` and all its related sub-models to the new implementation patterns.
  These changes are transparent for consumers.

  Here's the complete list of migrated models:
  - AttributeBooleanType
  - AttributeDateTimeType
  - AttributeDateType
  - AttributeDefinition
  - AttributeEnumType
  - AttributeLocalizableTextType
  - AttributeLocalizedEnumType
  - AttributeLocalizedEnumValue
  - AttributeMoneyType
  - AttributeNumberType
  - AttributePlainEnumType
  - AttributeReferenceType
  - AttributeSetType
  - AttributeTextType
  - AttributeTimeType
  - ProductType

### Patch Changes

- [#847](https://github.com/commercetools/test-data/pull/847) [`9b60de1`](https://github.com/commercetools/test-data/commit/9b60de1126df9ccda6e06e45ce9cee1ea6dce762) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - Updated the `Product` test model so it does not populate the `priceMode` property by default. That's an optional property and so the default version of the model should not populate it.

## 11.1.2

### Patch Changes

- [#835](https://github.com/commercetools/test-data/pull/835) [`41c0a63`](https://github.com/commercetools/test-data/commit/41c0a63254625538050df12955e0abea97d91889) Thanks [@rajrdk](https://github.com/rajrdk)! - Moved `Custom application` & `Custom view` models directories within the repository structure to improve readability.

- [#837](https://github.com/commercetools/test-data/pull/837) [`b294b3a`](https://github.com/commercetools/test-data/commit/b294b3a31b96b03e02c42a0b560aba01fa42b500) Thanks [@ragafus](https://github.com/ragafus)! - Fix ids of discounts related models

- [#832](https://github.com/commercetools/test-data/pull/832) [`f4954ca`](https://github.com/commercetools/test-data/commit/f4954caf47eaa9267e39c54530fb221df22de4a2) Thanks [@rajrdk](https://github.com/rajrdk)! - Fix : Add missing exports to shipping info presets

- [#843](https://github.com/commercetools/test-data/pull/843) [`3594f4d`](https://github.com/commercetools/test-data/commit/3594f4d81626496297bb357bd2adec16f510fffb) Thanks [@nima-ct](https://github.com/nima-ct)! - Introduce `recurrencePolicy` and `recurrencePolicyRef` fields to both the `StandalonePrice` and `Price` models. https://github.com/commercetools/test-data/pull/831 + https://github.com/commercetools/test-data/pull/829

- [#827](https://github.com/commercetools/test-data/pull/827) [`3fae39a`](https://github.com/commercetools/test-data/commit/3fae39a32ad86038a4b1fa8b38969ea2f7d4ce8a) Thanks [@leventekobor](https://github.com/leventekobor)! - The `CustomApplication`, `CustomApplicationDraft`, `CustomApplicationDeploymentPreview`, `CustomApplicationInstallation`, `CustomApplicationInstallationPermission`, `CustomApplicationMenuLink`, `CustomApplicationMenuLinkDraft`, `CustomApplicationPermission`, `CustomApplicationPermissionDraft`, `CustomApplicationSubmenuLink` and `CustomApplicationSubmenuLinkDraft` models have been refactored to use the new implementation patterns but that does not affect consumers.

## 11.1.1

### Patch Changes

- [#830](https://github.com/commercetools/test-data/pull/830) [`3c1b134`](https://github.com/commercetools/test-data/commit/3c1b1348d56d1ca4f22f7828dce6e05fc0bf0336) Thanks [@nima-ct](https://github.com/nima-ct)! - Fix non-synchronised recurrence-policy ids in GQL builds

- [#822](https://github.com/commercetools/test-data/pull/822) [`d70993c`](https://github.com/commercetools/test-data/commit/d70993c8f26cd0a630ac5e6b66f1339988af42d2) Thanks [@rajrdk](https://github.com/rajrdk)! - Moved `Project` and `Project extension` models directories within the repository structure to improve readability.

- [#828](https://github.com/commercetools/test-data/pull/828) [`f57df75`](https://github.com/commercetools/test-data/commit/f57df753bd0b52c5320e65e22ee0b61d3b30dd6e) Thanks [@rajrdk](https://github.com/rajrdk)! - Moved `Product Discount`, `Product Selection` and `Product Projection` models directories within the repository structure to improve readability.

- [#824](https://github.com/commercetools/test-data/pull/824) [`aaa88fd`](https://github.com/commercetools/test-data/commit/aaa88fd07a1009265dec21e9584857ceae1ff71e) Thanks [@rajrdk](https://github.com/rajrdk)! - Moved `Quote`, `Quote request` and `Staged quote` models directories within the repository structure to improve readability.

- [#825](https://github.com/commercetools/test-data/pull/825) [`54ff915`](https://github.com/commercetools/test-data/commit/54ff915f25f1b2bce7829ebf119c964c646c4dc9) Thanks [@rajrdk](https://github.com/rajrdk)! - Moved `Product`, and `Product Tailoring` models directories within the repository structure to improve readability.

## 11.1.0

### Minor Changes

- [#815](https://github.com/commercetools/test-data/pull/815) [`79f4d99`](https://github.com/commercetools/test-data/commit/79f4d996c3efe732d13d1a488e66c2dc749e6b3f) Thanks [@rajrdk](https://github.com/rajrdk)! - Added two new sub-models to the Cart one:
  - `DiscountOnTotalPrice`
  - `DiscountedTotalPricePortion`

  You can use them like this:

  ```ts
  import {
    DiscountOnTotalPriceGraphql,
    DiscountedTotalPricePortionGraphql,
  } from '@commercetools/composable-commerce-test-data/cart';

  const discountOnTotalPriceModel =
    DiscountOnTotalPriceGraphql.random().build();
  const discountedTotalPricePortionModel =
    DiscountedTotalPricePortionGraphql.random().build();
  ```

### Patch Changes

- [#820](https://github.com/commercetools/test-data/pull/820) [`6d5e10d`](https://github.com/commercetools/test-data/commit/6d5e10dddaa7179d3e05abe533cabca3f3e6481a) Thanks [@rajrdk](https://github.com/rajrdk)! - Moved `Organization` and `Organization-extention` models directories within the repository structure to improve readability.

- [#821](https://github.com/commercetools/test-data/pull/821) [`887f3f9`](https://github.com/commercetools/test-data/commit/887f3f920be66a5a36314cf766c859369597e817) Thanks [@rajrdk](https://github.com/rajrdk)! - Moved `Customer`, `Customer Group` and `Customers search list my view` models directories within the repository structure to improve readability.

- [#809](https://github.com/commercetools/test-data/pull/809) [`516a1f6`](https://github.com/commercetools/test-data/commit/516a1f60b9930da224e96e82c99f39092f03f128) Thanks [@Rombelirk](https://github.com/Rombelirk)! - The `ProductSelection` and `ProductSelectionDraft` models have been refactored to use the new implementation patterns but that does not affect consumers..
  Added new submodel to the ProductSelection model:
  - `ProductOfSelection`

  You can use it like this:

  ```ts
  import { ProductOfSelectionGraphql } from '@commercetools/composable-commerce-test-data/product-selection';

  const productOfSelectionModel = ProductOfSelectionGraphql.random().build();
  ```

  This submodel is now used to populate the required `productRefs` field of the ProductSelection GraphQL model, which was previously `null` by default.

- [#817](https://github.com/commercetools/test-data/pull/817) [`58a2db6`](https://github.com/commercetools/test-data/commit/58a2db6b8730e0d2d315d98a676cbaaa678c74d1) Thanks [@krishhna123](https://github.com/krishhna123)! - added missing import for cart-discount-custom-line-items-target

- [#811](https://github.com/commercetools/test-data/pull/811) [`15295ad`](https://github.com/commercetools/test-data/commit/15295add8ca475a907651ce3a824588f4ef624f6) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - B2C Lifestyle Presets - Fix shipping method zone rates in the shipping-method data models.

- [#813](https://github.com/commercetools/test-data/pull/813) [`fddc2a7`](https://github.com/commercetools/test-data/commit/fddc2a7756288c5368fe558240d5fe07ce1d1f29) Thanks [@ahmehri](https://github.com/ahmehri)! - fix(product-data): update slug generation to match pattern

  Source: https://docs.commercetools.com/api/projects/products#productdata

- [#810](https://github.com/commercetools/test-data/pull/810) [`f0e33e3`](https://github.com/commercetools/test-data/commit/f0e33e3d0611acff158ddac747bc2fc243c04969) Thanks [@emmenko](https://github.com/emmenko)! - We've moved the `Cart` and `CartDiscount` models directories within the repository for better readability. This does not imply any change from the consumers side.

## 11.0.0

### Major Changes

- [#801](https://github.com/commercetools/test-data/pull/801) [`9d32daa`](https://github.com/commercetools/test-data/commit/9d32daab440394a24832b65423c13dc6ee73bc31) Thanks [@emmenko](https://github.com/emmenko)! - BREAKING: all packages `@commercetools-test-data/*` are considered now deprecated and won't be published anymore.
  We now have a single package `@commercetools/composable-commerce-test-data` that contains all the test data models.

  The package is configured to be consumed using named entry points to be compatible with the previous individual packages and to help keeping the bundle size for consumers to a minimum.

  For example:

  ```ts
  // Before
  import { ChannelGraphql } from '@commercetools-test-data/channel';

  // After
  import { ChannelGraphql } from '@commercetools/composable-commerce-test-data/channel';
  ```

  To facilitate the migration, we provide a codemod script `scripts/transform-imports.mjs` to be executed in your repository that you need to migrate.

  You can use the following command:

  ```
  curl -sSL https://raw.githubusercontent.com/commercetools/test-data/main/scripts/transform-imports.mjs | node -
  ```

  Alternatively, copy the script content and create a new script file in your repository. Then execute the script with `node`.
  See JSDoc inside the script for more information.

## 10.18.2

### Patch Changes

- Updated dependencies [[`1828d09`](https://github.com/commercetools/test-data/commit/1828d09244b052416da855e44fbb9dfea21f5ffc)]:
  - @commercetools-test-data/product@10.18.2
  - @commercetools-test-data/cart@10.18.2
  - @commercetools-test-data/inventory-entry@10.18.2
  - @commercetools-test-data/product-projection@10.18.2
  - @commercetools-test-data/standalone-price@10.18.2
  - @commercetools-test-data/order@10.18.2
  - @commercetools-test-data/quote@10.18.2
  - @commercetools-test-data/quote-request@10.18.2
  - @commercetools-test-data/staged-quote@10.18.2
  - @commercetools-test-data/payment@10.18.2
  - @commercetools-test-data/core@10.18.2
  - @commercetools-test-data/associate-role@10.18.2
  - @commercetools-test-data/attribute-group@10.18.2
  - @commercetools-test-data/business-unit@10.18.2
  - @commercetools-test-data/cart-discount@10.18.2
  - @commercetools-test-data/category@10.18.2
  - @commercetools-test-data/channel@10.18.2
  - @commercetools-test-data/commons@10.18.2
  - @commercetools-test-data/custom-application@10.18.2
  - @commercetools-test-data/custom-object@10.18.2
  - @commercetools-test-data/custom-view@10.18.2
  - @commercetools-test-data/customer@10.18.2
  - @commercetools-test-data/customer-group@10.18.2
  - @commercetools-test-data/customers-search-list-my-view@10.18.2
  - @commercetools-test-data/discount-code@10.18.2
  - @commercetools-test-data/discounts-custom-view@10.18.2
  - @commercetools-test-data/filter-values@10.18.2
  - @commercetools-test-data/organization@10.18.2
  - @commercetools-test-data/organization-extension@10.18.2
  - @commercetools-test-data/platform-limits@10.18.2
  - @commercetools-test-data/product-discount@10.18.2
  - @commercetools-test-data/product-selection@10.18.2
  - @commercetools-test-data/product-tailoring@10.18.2
  - @commercetools-test-data/product-type@10.18.2
  - @commercetools-test-data/project@10.18.2
  - @commercetools-test-data/project-extension@10.18.2
  - @commercetools-test-data/review@10.18.2
  - @commercetools-test-data/shipping-method@10.18.2
  - @commercetools-test-data/shopping-list@10.18.2
  - @commercetools-test-data/state@10.18.2
  - @commercetools-test-data/store@10.18.2
  - @commercetools-test-data/tax-category@10.18.2
  - @commercetools-test-data/type@10.18.2
  - @commercetools-test-data/user@10.18.2
  - @commercetools-test-data/zone@10.18.2
  - @commercetools-test-data/utils@10.18.2

## 10.18.1

### Patch Changes

- Updated dependencies [[`7c9c9de`](https://github.com/commercetools/test-data/commit/7c9c9de3bb0468c94f0c5603ea3072bb88a94739)]:
  - @commercetools-test-data/product@10.18.1
  - @commercetools-test-data/cart@10.18.1
  - @commercetools-test-data/inventory-entry@10.18.1
  - @commercetools-test-data/product-projection@10.18.1
  - @commercetools-test-data/standalone-price@10.18.1
  - @commercetools-test-data/order@10.18.1
  - @commercetools-test-data/quote@10.18.1
  - @commercetools-test-data/quote-request@10.18.1
  - @commercetools-test-data/staged-quote@10.18.1
  - @commercetools-test-data/payment@10.18.1
  - @commercetools-test-data/core@10.18.1
  - @commercetools-test-data/associate-role@10.18.1
  - @commercetools-test-data/attribute-group@10.18.1
  - @commercetools-test-data/business-unit@10.18.1
  - @commercetools-test-data/cart-discount@10.18.1
  - @commercetools-test-data/category@10.18.1
  - @commercetools-test-data/channel@10.18.1
  - @commercetools-test-data/commons@10.18.1
  - @commercetools-test-data/custom-application@10.18.1
  - @commercetools-test-data/custom-object@10.18.1
  - @commercetools-test-data/custom-view@10.18.1
  - @commercetools-test-data/customer@10.18.1
  - @commercetools-test-data/customer-group@10.18.1
  - @commercetools-test-data/customers-search-list-my-view@10.18.1
  - @commercetools-test-data/discount-code@10.18.1
  - @commercetools-test-data/discounts-custom-view@10.18.1
  - @commercetools-test-data/filter-values@10.18.1
  - @commercetools-test-data/organization@10.18.1
  - @commercetools-test-data/organization-extension@10.18.1
  - @commercetools-test-data/platform-limits@10.18.1
  - @commercetools-test-data/product-discount@10.18.1
  - @commercetools-test-data/product-selection@10.18.1
  - @commercetools-test-data/product-tailoring@10.18.1
  - @commercetools-test-data/product-type@10.18.1
  - @commercetools-test-data/project@10.18.1
  - @commercetools-test-data/project-extension@10.18.1
  - @commercetools-test-data/review@10.18.1
  - @commercetools-test-data/shipping-method@10.18.1
  - @commercetools-test-data/shopping-list@10.18.1
  - @commercetools-test-data/state@10.18.1
  - @commercetools-test-data/store@10.18.1
  - @commercetools-test-data/tax-category@10.18.1
  - @commercetools-test-data/type@10.18.1
  - @commercetools-test-data/user@10.18.1
  - @commercetools-test-data/zone@10.18.1
  - @commercetools-test-data/utils@10.18.1

## 10.18.0

### Patch Changes

- Updated dependencies [[`d28d5d5`](https://github.com/commercetools/test-data/commit/d28d5d51cc20de814ef40deda2a0d8208845a4d0), [`149c2d2`](https://github.com/commercetools/test-data/commit/149c2d2b0abddc5703af513a397c7b37dc3c5884)]:
  - @commercetools-test-data/quote@10.18.0
  - @commercetools-test-data/product@10.18.0
  - @commercetools-test-data/order@10.18.0
  - @commercetools-test-data/cart@10.18.0
  - @commercetools-test-data/inventory-entry@10.18.0
  - @commercetools-test-data/product-projection@10.18.0
  - @commercetools-test-data/standalone-price@10.18.0
  - @commercetools-test-data/payment@10.18.0
  - @commercetools-test-data/quote-request@10.18.0
  - @commercetools-test-data/staged-quote@10.18.0
  - @commercetools-test-data/core@10.18.0
  - @commercetools-test-data/associate-role@10.18.0
  - @commercetools-test-data/attribute-group@10.18.0
  - @commercetools-test-data/business-unit@10.18.0
  - @commercetools-test-data/cart-discount@10.18.0
  - @commercetools-test-data/category@10.18.0
  - @commercetools-test-data/channel@10.18.0
  - @commercetools-test-data/commons@10.18.0
  - @commercetools-test-data/custom-application@10.18.0
  - @commercetools-test-data/custom-object@10.18.0
  - @commercetools-test-data/custom-view@10.18.0
  - @commercetools-test-data/customer@10.18.0
  - @commercetools-test-data/customer-group@10.18.0
  - @commercetools-test-data/customers-search-list-my-view@10.18.0
  - @commercetools-test-data/discount-code@10.18.0
  - @commercetools-test-data/discounts-custom-view@10.18.0
  - @commercetools-test-data/filter-values@10.18.0
  - @commercetools-test-data/organization@10.18.0
  - @commercetools-test-data/organization-extension@10.18.0
  - @commercetools-test-data/platform-limits@10.18.0
  - @commercetools-test-data/product-discount@10.18.0
  - @commercetools-test-data/product-selection@10.18.0
  - @commercetools-test-data/product-tailoring@10.18.0
  - @commercetools-test-data/product-type@10.18.0
  - @commercetools-test-data/project@10.18.0
  - @commercetools-test-data/project-extension@10.18.0
  - @commercetools-test-data/review@10.18.0
  - @commercetools-test-data/shipping-method@10.18.0
  - @commercetools-test-data/shopping-list@10.18.0
  - @commercetools-test-data/state@10.18.0
  - @commercetools-test-data/store@10.18.0
  - @commercetools-test-data/tax-category@10.18.0
  - @commercetools-test-data/type@10.18.0
  - @commercetools-test-data/user@10.18.0
  - @commercetools-test-data/zone@10.18.0
  - @commercetools-test-data/utils@10.18.0

## 10.17.0

### Patch Changes

- Updated dependencies [[`6d50cf0`](https://github.com/commercetools/test-data/commit/6d50cf0d1e2615730f32af6a5588957ad99c7f74), [`dd73146`](https://github.com/commercetools/test-data/commit/dd731461228c2c342e725d568b82ca02858be189)]:
  - @commercetools-test-data/cart@10.17.0
  - @commercetools-test-data/shipping-method@10.17.0
  - @commercetools-test-data/order@10.17.0
  - @commercetools-test-data/quote@10.17.0
  - @commercetools-test-data/quote-request@10.17.0
  - @commercetools-test-data/staged-quote@10.17.0
  - @commercetools-test-data/payment@10.17.0
  - @commercetools-test-data/core@10.17.0
  - @commercetools-test-data/associate-role@10.17.0
  - @commercetools-test-data/attribute-group@10.17.0
  - @commercetools-test-data/business-unit@10.17.0
  - @commercetools-test-data/cart-discount@10.17.0
  - @commercetools-test-data/category@10.17.0
  - @commercetools-test-data/channel@10.17.0
  - @commercetools-test-data/commons@10.17.0
  - @commercetools-test-data/custom-application@10.17.0
  - @commercetools-test-data/custom-object@10.17.0
  - @commercetools-test-data/custom-view@10.17.0
  - @commercetools-test-data/customer@10.17.0
  - @commercetools-test-data/customer-group@10.17.0
  - @commercetools-test-data/customers-search-list-my-view@10.17.0
  - @commercetools-test-data/discount-code@10.17.0
  - @commercetools-test-data/discounts-custom-view@10.17.0
  - @commercetools-test-data/filter-values@10.17.0
  - @commercetools-test-data/inventory-entry@10.17.0
  - @commercetools-test-data/organization@10.17.0
  - @commercetools-test-data/organization-extension@10.17.0
  - @commercetools-test-data/platform-limits@10.17.0
  - @commercetools-test-data/product@10.17.0
  - @commercetools-test-data/product-discount@10.17.0
  - @commercetools-test-data/product-projection@10.17.0
  - @commercetools-test-data/product-selection@10.17.0
  - @commercetools-test-data/product-tailoring@10.17.0
  - @commercetools-test-data/product-type@10.17.0
  - @commercetools-test-data/project@10.17.0
  - @commercetools-test-data/project-extension@10.17.0
  - @commercetools-test-data/review@10.17.0
  - @commercetools-test-data/shopping-list@10.17.0
  - @commercetools-test-data/standalone-price@10.17.0
  - @commercetools-test-data/state@10.17.0
  - @commercetools-test-data/store@10.17.0
  - @commercetools-test-data/tax-category@10.17.0
  - @commercetools-test-data/type@10.17.0
  - @commercetools-test-data/user@10.17.0
  - @commercetools-test-data/zone@10.17.0
  - @commercetools-test-data/utils@10.17.0

## 1.1.0

### Minor Changes

- [#697](https://github.com/commercetools/test-data/pull/697) [`de2f642`](https://github.com/commercetools/test-data/commit/de2f6429d50ac3087dc1ae469f4a3936234a5f08) Thanks [@CarlosCortizasCT](https://github.com/CarlosCortizasCT)! - New package which acts as an aggregator for all the test data models so consumers just need to use one dependency.

### Patch Changes

- Updated dependencies [[`b751d0e`](https://github.com/commercetools/test-data/commit/b751d0e8da303a7ed11f455e1890f74dac8a3560), [`de2f642`](https://github.com/commercetools/test-data/commit/de2f6429d50ac3087dc1ae469f4a3936234a5f08), [`de2f642`](https://github.com/commercetools/test-data/commit/de2f6429d50ac3087dc1ae469f4a3936234a5f08), [`9f1870c`](https://github.com/commercetools/test-data/commit/9f1870c8d2eed480e3175f9e9ea34cfd3978fab9), [`abb3703`](https://github.com/commercetools/test-data/commit/abb3703cd3b4a07815de9309958cd6c44af9a344), [`bfc8004`](https://github.com/commercetools/test-data/commit/bfc8004a9031cbcc146129e2d74a402ceea61731)]:
  - @commercetools-test-data/product@10.16.0
  - @commercetools-test-data/product-type@10.16.0
  - @commercetools-test-data/type@10.16.0
  - @commercetools-test-data/cart@10.16.0
  - @commercetools-test-data/product-tailoring@10.16.0
  - @commercetools-test-data/inventory-entry@10.16.0
  - @commercetools-test-data/product-projection@10.16.0
  - @commercetools-test-data/standalone-price@10.16.0
  - @commercetools-test-data/cart-discount@10.16.0
  - @commercetools-test-data/product-discount@10.16.0
  - @commercetools-test-data/category@10.16.0
  - @commercetools-test-data/channel@10.16.0
  - @commercetools-test-data/order@10.16.0
  - @commercetools-test-data/quote@10.16.0
  - @commercetools-test-data/quote-request@10.16.0
  - @commercetools-test-data/staged-quote@10.16.0
  - @commercetools-test-data/commons@10.16.0
  - @commercetools-test-data/custom-application@10.16.0
  - @commercetools-test-data/custom-view@10.16.0
  - @commercetools-test-data/customers-search-list-my-view@10.16.0
  - @commercetools-test-data/discounts-custom-view@10.16.0
  - @commercetools-test-data/filter-values@10.16.0
  - @commercetools-test-data/organization@10.16.0
  - @commercetools-test-data/organization-extension@10.16.0
  - @commercetools-test-data/project-extension@10.16.0
  - @commercetools-test-data/user@10.16.0
  - @commercetools-test-data/discount-code@10.16.0
  - @commercetools-test-data/store@10.16.0
  - @commercetools-test-data/payment@10.16.0
  - @commercetools-test-data/associate-role@10.16.0
  - @commercetools-test-data/attribute-group@10.16.0
  - @commercetools-test-data/business-unit@10.16.0
  - @commercetools-test-data/custom-object@10.16.0
  - @commercetools-test-data/customer@10.16.0
  - @commercetools-test-data/customer-group@10.16.0
  - @commercetools-test-data/platform-limits@10.16.0
  - @commercetools-test-data/product-selection@10.16.0
  - @commercetools-test-data/review@10.16.0
  - @commercetools-test-data/shipping-method@10.16.0
  - @commercetools-test-data/shopping-list@10.16.0
  - @commercetools-test-data/state@10.16.0
  - @commercetools-test-data/tax-category@10.16.0
  - @commercetools-test-data/zone@10.16.0
  - @commercetools-test-data/core@10.16.0
  - @commercetools-test-data/project@10.16.0
  - @commercetools-test-data/utils@10.16.0
