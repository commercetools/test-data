# @commercetools-test-data/product

## 6.1.0

### Minor Changes

- [#377](https://github.com/commercetools/test-data/pull/377) [`552e0c07`](https://github.com/commercetools/test-data/commit/552e0c07c605b6be59e1fffcbdbaec76aaf283ff) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Include sample-data-goodstore product presets (61-80).

- [#372](https://github.com/commercetools/test-data/pull/372) [`debc02bf`](https://github.com/commercetools/test-data/commit/debc02bf916b5729ba8c4e5db5ce63f88da4c008) Thanks [@jaikamat](https://github.com/jaikamat)! - include sample-data-goodstore product presets (1-20)

- [#376](https://github.com/commercetools/test-data/pull/376) [`7de13750`](https://github.com/commercetools/test-data/commit/7de13750418e0dc851e902ce639f2e8d183403f0) Thanks [@jaikamat](https://github.com/jaikamat)! - include sample-data-goodstore product presets (41-60)

- [#379](https://github.com/commercetools/test-data/pull/379) [`9a1f96eb`](https://github.com/commercetools/test-data/commit/9a1f96eb565573b0c3992224c6ed5514e6777b2b) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Include sample-data-goodstore product presets (101-118).

- [#373](https://github.com/commercetools/test-data/pull/373) [`f1ab3911`](https://github.com/commercetools/test-data/commit/f1ab3911664e220b997fc8fa9b1a294ed461ed1f) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Include sample-data-goodstore product presets (21-40)

- [#378](https://github.com/commercetools/test-data/pull/378) [`44aa6059`](https://github.com/commercetools/test-data/commit/44aa60596eb0e09f87a7e1df546b8503838c2578) Thanks [@jaikamat](https://github.com/jaikamat)! - include sample-data-goodstore product presets (81-100)

### Patch Changes

- [#385](https://github.com/commercetools/test-data/pull/385) [`9abfc5ca`](https://github.com/commercetools/test-data/commit/9abfc5ca63c9e7b2bf2d4a525ba385beb3d4f5ed) Thanks [@jaikamat](https://github.com/jaikamat)! - update i18n translations for goodstore product presets

- Updated dependencies [[`4b81a5e2`](https://github.com/commercetools/test-data/commit/4b81a5e2bf524f1dc1e517a792293464168d7c3b), [`0e9afd36`](https://github.com/commercetools/test-data/commit/0e9afd36e7e6981248d278fc0bbd453231b9ded4), [`935cc4c5`](https://github.com/commercetools/test-data/commit/935cc4c5975984157c44a058d48e74417a2f4d33), [`d6b1a8f7`](https://github.com/commercetools/test-data/commit/d6b1a8f7a5f97b4c91e8fcda2e851e453595019e), [`8977473f`](https://github.com/commercetools/test-data/commit/8977473fd913ad83641f0ff9f0fa64e92ce75191), [`efc1594a`](https://github.com/commercetools/test-data/commit/efc1594a524302de3ac8f213d19ccb911d1a3065), [`3cccf1d1`](https://github.com/commercetools/test-data/commit/3cccf1d19057b05cb65c9696465b6dcd5ddafa97), [`f6328503`](https://github.com/commercetools/test-data/commit/f632850380fadd47425b8e6062dfcfa53490b3fa), [`f1ab3911`](https://github.com/commercetools/test-data/commit/f1ab3911664e220b997fc8fa9b1a294ed461ed1f), [`ccfec1d2`](https://github.com/commercetools/test-data/commit/ccfec1d213950e64c5c44180634c19e1bf77768b), [`b00d01a5`](https://github.com/commercetools/test-data/commit/b00d01a5aa67265e726e2d739f067ead042d436f), [`5b024176`](https://github.com/commercetools/test-data/commit/5b0241768a97c7ea94a87df6e5a58f9ea64aaf0c)]:
  - @commercetools-test-data/tax-category@6.1.0
  - @commercetools-test-data/product-type@6.1.0
  - @commercetools-test-data/category@6.1.0
  - @commercetools-test-data/commons@6.1.0
  - @commercetools-test-data/core@6.1.0
  - @commercetools-test-data/utils@6.1.0

## 6.0.0

### Major Changes

- [#346](https://github.com/commercetools/test-data/pull/346) [`bc51760`](https://github.com/commercetools/test-data/commit/bc51760e2c4fb3cffe166dbc29d5dbe86b79a78e) Thanks [@valoriecarli](https://github.com/valoriecarli)! - To better align with commercetools’ grouped representations and workflows, the following changes have been made:

  - The package for **LineItem** will be deprecated and is now colocated under package `@commercetools-test-data/cart`
  - The **ProductVariant** package containing **ProductVariant**, **Attribute** and **Image** will be deprecated and models are now colocated under package `@commercetools-test-data/product`
  - The package for **AttributeDefinition** will be deprecated and is now colocated under package `@commercetools-test-data/product-type`
  - The **AttributeType** package containing **AttributeBooleanType**, **AttributeLocalizedEnumValue**, **AttributePlainEnumValue** and **AttributeTextType** will be deprecated and models are now colocated under package `@commercetools-test-data/product-type`

  Updating this package within your codebase will:<br>
  **1.** Require the updating of import statements to reference named exports.<br>
  Examples:<br>
  `import { AttributeType } from '@commercetools-test-data/product-type’`<br>
  `import { LineItem } from '@commercetools-test-data/cart'`<br><br>
  **2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:<br>

  - `@commercetools-test-data/line-item`<br>
  - `@commercetools-test-data/product-variant`<br>
  - `@commercetools-test-data/attribute-definition`<br>
  - `@commercetools-test-data/attribute-type`

### Patch Changes

- Updated dependencies [[`bc51760`](https://github.com/commercetools/test-data/commit/bc51760e2c4fb3cffe166dbc29d5dbe86b79a78e), [`bfdf4db`](https://github.com/commercetools/test-data/commit/bfdf4db82e75a903c159552796a08b214edbedea)]:
  - @commercetools-test-data/product-type@6.0.0
  - @commercetools-test-data/tax-category@6.0.0
  - @commercetools-test-data/core@6.0.0
  - @commercetools-test-data/category@6.0.0
  - @commercetools-test-data/commons@6.0.0
  - @commercetools-test-data/utils@6.0.0

## 5.11.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.11.2
  - @commercetools-test-data/category@5.11.2
  - @commercetools-test-data/commons@5.11.2
  - @commercetools-test-data/product-type@5.11.2
  - @commercetools-test-data/product-variant@5.11.2
  - @commercetools-test-data/tax-category@5.11.2
  - @commercetools-test-data/utils@5.11.2

## 5.11.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.11.1
  - @commercetools-test-data/category@5.11.1
  - @commercetools-test-data/commons@5.11.1
  - @commercetools-test-data/product-type@5.11.1
  - @commercetools-test-data/product-variant@5.11.1
  - @commercetools-test-data/tax-category@5.11.1
  - @commercetools-test-data/utils@5.11.1

## 5.11.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.11.0
  - @commercetools-test-data/category@5.11.0
  - @commercetools-test-data/commons@5.11.0
  - @commercetools-test-data/product-type@5.11.0
  - @commercetools-test-data/product-variant@5.11.0
  - @commercetools-test-data/tax-category@5.11.0
  - @commercetools-test-data/utils@5.11.0

## 5.10.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.10.1
  - @commercetools-test-data/category@5.10.1
  - @commercetools-test-data/commons@5.10.1
  - @commercetools-test-data/product-type@5.10.1
  - @commercetools-test-data/product-variant@5.10.1
  - @commercetools-test-data/tax-category@5.10.1
  - @commercetools-test-data/utils@5.10.1

## 5.10.0

### Patch Changes

- Updated dependencies [[`c19456b`](https://github.com/commercetools/test-data/commit/c19456b5f0df5c48e7dc7b74f70ad0a18668c7a4), [`9040a90`](https://github.com/commercetools/test-data/commit/9040a9066d7cda96fba1389fd35cd493248fcd94)]:
  - @commercetools-test-data/commons@5.10.0
  - @commercetools-test-data/category@5.10.0
  - @commercetools-test-data/product-type@5.10.0
  - @commercetools-test-data/product-variant@5.10.0
  - @commercetools-test-data/tax-category@5.10.0
  - @commercetools-test-data/core@5.10.0
  - @commercetools-test-data/utils@5.10.0

## 5.9.0

### Minor Changes

- [#304](https://github.com/commercetools/test-data/pull/304) [`819d832`](https://github.com/commercetools/test-data/commit/819d832e01c7cb774cfde8c12d026b20ee4dc9da) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Update sdk dependency. Add graphql transformer to ProductSetting model.

### Patch Changes

- Updated dependencies [[`819d832`](https://github.com/commercetools/test-data/commit/819d832e01c7cb774cfde8c12d026b20ee4dc9da)]:
  - @commercetools-test-data/product-variant@5.9.0
  - @commercetools-test-data/product-type@5.9.0
  - @commercetools-test-data/tax-category@5.9.0
  - @commercetools-test-data/category@5.9.0
  - @commercetools-test-data/commons@5.9.0
  - @commercetools-test-data/core@5.9.0
  - @commercetools-test-data/utils@5.9.0

## 5.8.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.8.2
  - @commercetools-test-data/category@5.8.2
  - @commercetools-test-data/commons@5.8.2
  - @commercetools-test-data/product-type@5.8.2
  - @commercetools-test-data/product-variant@5.8.2
  - @commercetools-test-data/tax-category@5.8.2
  - @commercetools-test-data/utils@5.8.2

## 5.8.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.8.1
  - @commercetools-test-data/category@5.8.1
  - @commercetools-test-data/commons@5.8.1
  - @commercetools-test-data/product-type@5.8.1
  - @commercetools-test-data/product-variant@5.8.1
  - @commercetools-test-data/tax-category@5.8.1
  - @commercetools-test-data/utils@5.8.1

## 5.8.0

### Minor Changes

- [#280](https://github.com/commercetools/test-data/pull/280) [`2284af3`](https://github.com/commercetools/test-data/commit/2284af362e7168b26f949b6e853527b7414f2669) Thanks [@renovate](https://github.com/apps/renovate)! - Update to Faker v8. Additional documentation referenced [here](https://fakerjs.dev/guide/upgrading.html).

- [#298](https://github.com/commercetools/test-data/pull/298) [`1f3a24b`](https://github.com/commercetools/test-data/commit/1f3a24b916acff284d36e4edc03875981817c09f) Thanks [@jaikamat](https://github.com/jaikamat)! - Fix incorrect spelling in customer email, add categories for product draft presets

### Patch Changes

- Updated dependencies [[`2284af3`](https://github.com/commercetools/test-data/commit/2284af362e7168b26f949b6e853527b7414f2669)]:
  - @commercetools-test-data/product-variant@5.8.0
  - @commercetools-test-data/product-type@5.8.0
  - @commercetools-test-data/tax-category@5.8.0
  - @commercetools-test-data/category@5.8.0
  - @commercetools-test-data/commons@5.8.0
  - @commercetools-test-data/utils@5.8.0
  - @commercetools-test-data/core@5.8.0

## 5.7.0

### Patch Changes

- Updated dependencies [[`21a3705`](https://github.com/commercetools/test-data/commit/21a37055edc4dc2f8ec8bd2b509713390cefd9e5), [`fa7acd2`](https://github.com/commercetools/test-data/commit/fa7acd28ee59ef8d035597d025c4d9d82d4ac2bc)]:
  - @commercetools-test-data/commons@5.7.0
  - @commercetools-test-data/category@5.7.0
  - @commercetools-test-data/product-type@5.7.0
  - @commercetools-test-data/product-variant@5.7.0
  - @commercetools-test-data/tax-category@5.7.0
  - @commercetools-test-data/core@5.7.0
  - @commercetools-test-data/utils@5.7.0

## 5.6.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/product-type@5.6.0
  - @commercetools-test-data/product-variant@5.6.0
  - @commercetools-test-data/core@5.6.0
  - @commercetools-test-data/category@5.6.0
  - @commercetools-test-data/commons@5.6.0
  - @commercetools-test-data/tax-category@5.6.0
  - @commercetools-test-data/utils@5.6.0

## 5.5.1

### Patch Changes

- Updated dependencies [[`07ea874`](https://github.com/commercetools/test-data/commit/07ea8748049f50ec6b74438fcf2ee00d58c9f86d)]:
  - @commercetools-test-data/commons@5.5.1
  - @commercetools-test-data/category@5.5.1
  - @commercetools-test-data/product-type@5.5.1
  - @commercetools-test-data/product-variant@5.5.1
  - @commercetools-test-data/tax-category@5.5.1
  - @commercetools-test-data/core@5.5.1
  - @commercetools-test-data/utils@5.5.1

## 5.5.0

### Patch Changes

- Updated dependencies [[`b49a3ed`](https://github.com/commercetools/test-data/commit/b49a3ed0c028f279ac039c23d986182323bce6de)]:
  - @commercetools-test-data/product-variant@5.5.0
  - @commercetools-test-data/commons@5.5.0
  - @commercetools-test-data/category@5.5.0
  - @commercetools-test-data/product-type@5.5.0
  - @commercetools-test-data/tax-category@5.5.0
  - @commercetools-test-data/core@5.5.0
  - @commercetools-test-data/utils@5.5.0

## 5.4.1

### Patch Changes

- Updated dependencies [[`57b1fa2`](https://github.com/commercetools/test-data/commit/57b1fa2c2c9f855eca534ef5646bc9f77c054ab9)]:
  - @commercetools-test-data/tax-category@5.4.1
  - @commercetools-test-data/commons@5.4.1
  - @commercetools-test-data/category@5.4.1
  - @commercetools-test-data/product-type@5.4.1
  - @commercetools-test-data/product-variant@5.4.1
  - @commercetools-test-data/core@5.4.1
  - @commercetools-test-data/utils@5.4.1

## 5.4.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.4.0
  - @commercetools-test-data/category@5.4.0
  - @commercetools-test-data/commons@5.4.0
  - @commercetools-test-data/product-type@5.4.0
  - @commercetools-test-data/product-variant@5.4.0
  - @commercetools-test-data/tax-category@5.4.0
  - @commercetools-test-data/utils@5.4.0

## 5.3.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.6
  - @commercetools-test-data/category@5.3.6
  - @commercetools-test-data/commons@5.3.6
  - @commercetools-test-data/product-type@5.3.6
  - @commercetools-test-data/product-variant@5.3.6
  - @commercetools-test-data/tax-category@5.3.6
  - @commercetools-test-data/utils@5.3.6

## 5.3.5

### Patch Changes

- Updated dependencies [[`a321085`](https://github.com/commercetools/test-data/commit/a321085894185cd7206dde9b3a9a67dcf8722443)]:
  - @commercetools-test-data/tax-category@5.3.5
  - @commercetools-test-data/commons@5.3.5
  - @commercetools-test-data/category@5.3.5
  - @commercetools-test-data/product-type@5.3.5
  - @commercetools-test-data/product-variant@5.3.5
  - @commercetools-test-data/core@5.3.5
  - @commercetools-test-data/utils@5.3.5

## 5.3.4

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@5.3.4
  - @commercetools-test-data/category@5.3.4
  - @commercetools-test-data/commons@5.3.4
  - @commercetools-test-data/product-type@5.3.4
  - @commercetools-test-data/product-variant@5.3.4
  - @commercetools-test-data/tax-category@5.3.4
  - @commercetools-test-data/utils@5.3.4

## 5.3.3

### Patch Changes

- [#268](https://github.com/commercetools/test-data/pull/268) [`e5c1c93`](https://github.com/commercetools/test-data/commit/e5c1c9348b9b892a567c882f854d64bd82553df9) Thanks [@jaikamat](https://github.com/jaikamat)! - correct stringification method in graphql transformer

- Updated dependencies [[`e5c1c93`](https://github.com/commercetools/test-data/commit/e5c1c9348b9b892a567c882f854d64bd82553df9)]:
  - @commercetools-test-data/product-variant@5.3.3
  - @commercetools-test-data/core@5.3.3
  - @commercetools-test-data/category@5.3.3
  - @commercetools-test-data/commons@5.3.3
  - @commercetools-test-data/product-type@5.3.3
  - @commercetools-test-data/tax-category@5.3.3
  - @commercetools-test-data/utils@5.3.3

## 5.3.2

### Patch Changes

- [#266](https://github.com/commercetools/test-data/pull/266) [`1d8a21c`](https://github.com/commercetools/test-data/commit/1d8a21c55728dcf1059e37a1964280f2eda22d09) Thanks [@jaikamat](https://github.com/jaikamat)! - fix graphql transformations

- Updated dependencies [[`1d8a21c`](https://github.com/commercetools/test-data/commit/1d8a21c55728dcf1059e37a1964280f2eda22d09)]:
  - @commercetools-test-data/product-variant@5.3.2
  - @commercetools-test-data/commons@5.3.2
  - @commercetools-test-data/category@5.3.2
  - @commercetools-test-data/product-type@5.3.2
  - @commercetools-test-data/tax-category@5.3.2
  - @commercetools-test-data/core@5.3.2
  - @commercetools-test-data/utils@5.3.2

## 5.3.1

### Patch Changes

- Updated dependencies [[`0de68fc`](https://github.com/commercetools/test-data/commit/0de68fc8b6ace84349952874a9b093a106b6acd6)]:
  - @commercetools-test-data/product-type@5.3.1
  - @commercetools-test-data/product-variant@5.3.1
  - @commercetools-test-data/core@5.3.1
  - @commercetools-test-data/category@5.3.1
  - @commercetools-test-data/commons@5.3.1
  - @commercetools-test-data/tax-category@5.3.1
  - @commercetools-test-data/utils@5.3.1

## 5.3.0

### Patch Changes

- Updated dependencies [[`0d102a5`](https://github.com/commercetools/test-data/commit/0d102a540f7c2fe462f54f0e67e8b2d869d3bdc4)]:
  - @commercetools-test-data/product-type@5.3.0
  - @commercetools-test-data/product-variant@5.3.0
  - @commercetools-test-data/core@5.3.0
  - @commercetools-test-data/category@5.3.0
  - @commercetools-test-data/commons@5.3.0
  - @commercetools-test-data/tax-category@5.3.0
  - @commercetools-test-data/utils@5.3.0

## 5.2.0

### Minor Changes

- [#256](https://github.com/commercetools/test-data/pull/256) [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e) Thanks [@jaikamat](https://github.com/jaikamat)! - fix graphql draft types

- [#256](https://github.com/commercetools/test-data/pull/256) [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e) Thanks [@jaikamat](https://github.com/jaikamat)! - remove \_\_typename from drafts

### Patch Changes

- Updated dependencies [[`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e), [`09f06a7`](https://github.com/commercetools/test-data/commit/09f06a7abde60674c7702b4bfb9be2d62fb6ab8e)]:
  - @commercetools-test-data/category@5.2.0
  - @commercetools-test-data/product-variant@5.2.0
  - @commercetools-test-data/product-type@5.2.0
  - @commercetools-test-data/tax-category@5.2.0
  - @commercetools-test-data/commons@5.2.0
  - @commercetools-test-data/core@5.2.0
  - @commercetools-test-data/utils@5.2.0

## 5.1.1

### Patch Changes

- [#254](https://github.com/commercetools/test-data/pull/254) [`8970865`](https://github.com/commercetools/test-data/commit/89708651f4c088517ce3f4d60a1650698a129a63) Thanks [@ByronDWall](https://github.com/ByronDWall)! - refactor(sku and slug): update handling of sku to use a random word followed by 3 random alphanumeric characters to insure sku uniqueness in line-item, product-variant, product-variant-draft, product-data, and product generator.ts files. update slug to use localizedString slug preset in product-draft generator.ts file.

- Updated dependencies [[`8970865`](https://github.com/commercetools/test-data/commit/89708651f4c088517ce3f4d60a1650698a129a63)]:
  - @commercetools-test-data/product-variant@5.1.1
  - @commercetools-test-data/core@5.1.1
  - @commercetools-test-data/category@5.1.1
  - @commercetools-test-data/commons@5.1.1
  - @commercetools-test-data/product-type@5.1.1
  - @commercetools-test-data/tax-category@5.1.1
  - @commercetools-test-data/utils@5.1.1

## 5.1.0

### Minor Changes

- [#252](https://github.com/commercetools/test-data/pull/252) [`011dc9b`](https://github.com/commercetools/test-data/commit/011dc9b3fe3b9fe2e554b0287f994c5a17f1fccf) Thanks [@jaikamat](https://github.com/jaikamat)! - edited tests, minor preset revisions

### Patch Changes

- Updated dependencies [[`011dc9b`](https://github.com/commercetools/test-data/commit/011dc9b3fe3b9fe2e554b0287f994c5a17f1fccf), [`d271d64`](https://github.com/commercetools/test-data/commit/d271d649dceab579feac91199f0f6b72791c763d), [`c8c4ecb`](https://github.com/commercetools/test-data/commit/c8c4ecbb6cbee6407448a645243846c6e91527d1)]:
  - @commercetools-test-data/product-type@5.1.0
  - @commercetools-test-data/category@5.1.0
  - @commercetools-test-data/commons@5.1.0
  - @commercetools-test-data/tax-category@5.1.0
  - @commercetools-test-data/product-variant@5.1.0
  - @commercetools-test-data/core@5.1.0
  - @commercetools-test-data/utils@5.1.0

## 5.0.0

### Major Changes

- [#248](https://github.com/commercetools/test-data/pull/248) [`40505df`](https://github.com/commercetools/test-data/commit/40505df60a237c5bd7ab9387a989d144e33c67d6) Thanks [@valoriecarli](https://github.com/valoriecarli)! - To better align with commercetools’ grouped representations and workflows, models for **Price**, **Money**, and **CentPrecisionMoney** have been colocated under package `@commercetools-test-data/commons`.

  Updating this package within your codebase will:<br>
  **1.** Require the updating of import statements to reference named exports.<br>
  Examples:<br>

  - `import { CentPrecisionMoney } from '@commercetools-test-data/commons’` <br>
  - `import { PriceDraft } from '@commercetools-test-data/commons'`<br><br>

  **2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:<br>

  - `@commercetools-test-data/price` <br>
  - `@commercetools-test-data/money` <br>
  - `@commercetools-test-data/cent-precision-money` <br>

- [#241](https://github.com/commercetools/test-data/pull/241) [`796e72c`](https://github.com/commercetools/test-data/commit/796e72c3dab6ddb8b6206fe78560743eeacda280) Thanks [@valoriecarli](https://github.com/valoriecarli)! - To better align with commercetools’ grouped representations and workflows, models for **TaxCategory** and **TaxRate** have been colocated under package `@commercetools-test-data/tax-category`.

  Updating this package within your codebase will:<br>
  **1.** Require the updating of import statements to reference named exports.<br>
  Examples:<br>
  `import { TaxCategoryDraft } from '@commercetools-test-data/tax-category’`<br>
  `import { TaxRate } from '@commercetools-test-data/tax-category'`<br><br>
  **2.** Require the use of '@commercetools-test-data/tax-rate’ to be discontinued and all references removed, as this package is scheduled to be unpublished.

- [#244](https://github.com/commercetools/test-data/pull/244) [`c0ed06d`](https://github.com/commercetools/test-data/commit/c0ed06debd5c71d30943e0fd0b7c81447a06b6f4) Thanks [@valoriecarli](https://github.com/valoriecarli)! - To better align with commercetools’ grouped representations and workflows, models for **ProductVariant**, **ProductCatalogData** and **Image** have been colocated under package `@commercetools-test-data/product-variant`.

  Updating this package within your codebase will:<br>
  **1.** Require the updating of import statements to reference named exports.<br>
  Examples:<br>

  - `import { ProductVariantDraft } from '@commercetools-test-data/product-variant’` <br>
  - `import { Image } from '@commercetools-test-data/product-variant'`<br><br>

  **2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:<br>

  - `@commercetools-test-data/attribute` <br>
  - `@commercetools-test-data/image` <br>

- [#242](https://github.com/commercetools/test-data/pull/242) [`b1bb291`](https://github.com/commercetools/test-data/commit/b1bb291749813a33ccf3acdcc3531550a5b02eba) Thanks [@valoriecarli](https://github.com/valoriecarli)! - To better align with commercetools’ grouped representations and workflows, models for **Product**, **ProductCatalogData** and **ProductData** have been colocated under package `@commercetools-test-data/product`.

  Updating this package within your codebase will:<br>
  **1.** Require the updating of import statements to reference named exports.<br>
  Examples:<br>
  `import { ProductDraft } from '@commercetools-test-data/product’`<br>
  `import { ProductCatalogData } from '@commercetools-test-data/product'`<br><br>
  **2.** Require the use of `@commercetools-test-data/product-catalog-data` and `@commercetools-test-data/product-data` to be discontinued and all references removed, as these packages are scheduled to be unpublished.

### Minor Changes

- [#243](https://github.com/commercetools/test-data/pull/243) [`29bbb57`](https://github.com/commercetools/test-data/commit/29bbb57115d83ea06ed378fc3bea4e4ff6cfbfbb) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Adds product draft presets for fashion sample data.

### Patch Changes

- Updated dependencies [[`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1), [`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1), [`90420e1`](https://github.com/commercetools/test-data/commit/90420e1b380fb29368226adbaada1b76551b6e61), [`40505df`](https://github.com/commercetools/test-data/commit/40505df60a237c5bd7ab9387a989d144e33c67d6), [`29bbb57`](https://github.com/commercetools/test-data/commit/29bbb57115d83ea06ed378fc3bea4e4ff6cfbfbb), [`fda4538`](https://github.com/commercetools/test-data/commit/fda4538360c0952f7bfdd0dab5efcff827f7bd1d), [`796e72c`](https://github.com/commercetools/test-data/commit/796e72c3dab6ddb8b6206fe78560743eeacda280), [`7631166`](https://github.com/commercetools/test-data/commit/7631166007d4967f720f713f05d073f2da398075), [`23caa84`](https://github.com/commercetools/test-data/commit/23caa84726eb6b97a55dc6cdc23280e22382f105), [`c0ed06d`](https://github.com/commercetools/test-data/commit/c0ed06debd5c71d30943e0fd0b7c81447a06b6f4), [`b1bb291`](https://github.com/commercetools/test-data/commit/b1bb291749813a33ccf3acdcc3531550a5b02eba), [`b62d936`](https://github.com/commercetools/test-data/commit/b62d936dd26175986a66cbbfa0bd38f4008ddcad)]:
  - @commercetools-test-data/commons@5.0.0
  - @commercetools-test-data/category@5.0.0
  - @commercetools-test-data/product-variant@5.0.0
  - @commercetools-test-data/product-type@5.0.0
  - @commercetools-test-data/tax-category@5.0.0
  - @commercetools-test-data/utils@5.0.0
  - @commercetools-test-data/core@5.0.0

## 4.11.1

### Patch Changes

- [#223](https://github.com/commercetools/test-data/pull/223) [`c94d229`](https://github.com/commercetools/test-data/commit/c94d22961830a472dee5f0b66dededed1c362238) Thanks [@valoriecarli](https://github.com/valoriecarli)! - expose addtl drafts

- Updated dependencies []:
  - @commercetools-test-data/product-type@4.11.1
  - @commercetools-test-data/product-variant@4.11.1
  - @commercetools-test-data/core@4.11.1
  - @commercetools-test-data/commons@4.11.1
  - @commercetools-test-data/product-catalog-data@4.11.1
  - @commercetools-test-data/tax-category@4.11.1
  - @commercetools-test-data/utils@4.11.1

## 4.11.0

### Minor Changes

- [#219](https://github.com/commercetools/test-data/pull/219) [`11ad422`](https://github.com/commercetools/test-data/commit/11ad422536698aa09375ad45dcd17ce43a286d70) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Add `product` model and expose `product-variant` draft.

### Patch Changes

- Updated dependencies [[`06abaa6`](https://github.com/commercetools/test-data/commit/06abaa6cee4c712ba9307258d65cb8861e3af42d), [`50771bb`](https://github.com/commercetools/test-data/commit/50771bb86398d5bd3ce588196f209c703c71ac97), [`11ad422`](https://github.com/commercetools/test-data/commit/11ad422536698aa09375ad45dcd17ce43a286d70)]:
  - @commercetools-test-data/commons@4.11.0
  - @commercetools-test-data/product-variant@4.11.0
  - @commercetools-test-data/product-type@4.11.0
  - @commercetools-test-data/product-catalog-data@4.11.0
  - @commercetools-test-data/tax-category@4.11.0
  - @commercetools-test-data/core@4.11.0
  - @commercetools-test-data/utils@4.11.0
