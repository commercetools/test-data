# @commercetools/composable-commerce-test-data

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
