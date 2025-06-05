# @commercetools/composable-commerce-test-data

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
