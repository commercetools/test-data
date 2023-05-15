# @commercetools-test-data/product-variant

## 5.1.1

### Patch Changes

- [#254](https://github.com/commercetools/test-data/pull/254) [`8970865`](https://github.com/commercetools/test-data/commit/89708651f4c088517ce3f4d60a1650698a129a63) Thanks [@ByronDWall](https://github.com/ByronDWall)! - refactor(sku and slug): update handling of sku to use a random word followed by 3 random alphanumeric characters to insure sku uniqueness in line-item, product-variant, product-variant-draft, product-data, and product generator.ts files. update slug to use localizedString slug preset in product-draft generator.ts file.

- Updated dependencies []:
  - @commercetools-test-data/core@5.1.1
  - @commercetools-test-data/attribute-definition@5.1.1
  - @commercetools-test-data/commons@5.1.1
  - @commercetools-test-data/utils@5.1.1

## 5.1.0

### Patch Changes

- Updated dependencies [[`011dc9b`](https://github.com/commercetools/test-data/commit/011dc9b3fe3b9fe2e554b0287f994c5a17f1fccf), [`c8c4ecb`](https://github.com/commercetools/test-data/commit/c8c4ecbb6cbee6407448a645243846c6e91527d1)]:
  - @commercetools-test-data/commons@5.1.0
  - @commercetools-test-data/attribute-definition@5.1.0
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

- [#244](https://github.com/commercetools/test-data/pull/244) [`c0ed06d`](https://github.com/commercetools/test-data/commit/c0ed06debd5c71d30943e0fd0b7c81447a06b6f4) Thanks [@valoriecarli](https://github.com/valoriecarli)! - To better align with commercetools’ grouped representations and workflows, models for **ProductVariant**, **ProductCatalogData** and **Image** have been colocated under package `@commercetools-test-data/product-variant`.

  Updating this package within your codebase will:<br>
  **1.** Require the updating of import statements to reference named exports.<br>
  Examples:<br>

  - `import { ProductVariantDraft } from '@commercetools-test-data/product-variant’` <br>
  - `import { Image } from '@commercetools-test-data/product-variant'`<br><br>

  **2.** Require the use of the following packages to be discontinued and all references removed, as these packages are scheduled to be unpublished:<br>

  - `@commercetools-test-data/attribute` <br>
  - `@commercetools-test-data/image` <br>

### Minor Changes

- [#243](https://github.com/commercetools/test-data/pull/243) [`29bbb57`](https://github.com/commercetools/test-data/commit/29bbb57115d83ea06ed378fc3bea4e4ff6cfbfbb) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Adds product draft presets for fashion sample data.

### Patch Changes

- Updated dependencies [[`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1), [`c23dee3`](https://github.com/commercetools/test-data/commit/c23dee39acf15b24bf33187944e850adf9404bc1), [`40505df`](https://github.com/commercetools/test-data/commit/40505df60a237c5bd7ab9387a989d144e33c67d6), [`29bbb57`](https://github.com/commercetools/test-data/commit/29bbb57115d83ea06ed378fc3bea4e4ff6cfbfbb), [`fda4538`](https://github.com/commercetools/test-data/commit/fda4538360c0952f7bfdd0dab5efcff827f7bd1d), [`7631166`](https://github.com/commercetools/test-data/commit/7631166007d4967f720f713f05d073f2da398075), [`23caa84`](https://github.com/commercetools/test-data/commit/23caa84726eb6b97a55dc6cdc23280e22382f105), [`b62d936`](https://github.com/commercetools/test-data/commit/b62d936dd26175986a66cbbfa0bd38f4008ddcad)]:
  - @commercetools-test-data/commons@5.0.0
  - @commercetools-test-data/attribute-definition@5.0.0
  - @commercetools-test-data/utils@5.0.0
  - @commercetools-test-data/core@5.0.0

## 4.11.1

### Patch Changes

- Updated dependencies [[`c94d229`](https://github.com/commercetools/test-data/commit/c94d22961830a472dee5f0b66dededed1c362238)]:
  - @commercetools-test-data/price@4.11.1
  - @commercetools-test-data/attribute@4.11.1
  - @commercetools-test-data/core@4.11.1
  - @commercetools-test-data/commons@4.11.1
  - @commercetools-test-data/image@4.11.1
  - @commercetools-test-data/utils@4.11.1

## 4.11.0

### Minor Changes

- [#215](https://github.com/commercetools/test-data/pull/215) [`50771bb`](https://github.com/commercetools/test-data/commit/50771bb86398d5bd3ce588196f209c703c71ac97) Thanks [@valoriecarli](https://github.com/valoriecarli)! - add additional presets to Price & ProductVariant

- [#219](https://github.com/commercetools/test-data/pull/219) [`11ad422`](https://github.com/commercetools/test-data/commit/11ad422536698aa09375ad45dcd17ce43a286d70) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Add `product` model and expose `product-variant` draft.

### Patch Changes

- Updated dependencies [[`06abaa6`](https://github.com/commercetools/test-data/commit/06abaa6cee4c712ba9307258d65cb8861e3af42d), [`50771bb`](https://github.com/commercetools/test-data/commit/50771bb86398d5bd3ce588196f209c703c71ac97)]:
  - @commercetools-test-data/commons@4.11.0
  - @commercetools-test-data/price@4.11.0
  - @commercetools-test-data/attribute@4.11.0
  - @commercetools-test-data/image@4.11.0
  - @commercetools-test-data/core@4.11.0
  - @commercetools-test-data/utils@4.11.0

## 4.10.0

### Minor Changes

- [#209](https://github.com/commercetools/test-data/pull/209) [`e850444`](https://github.com/commercetools/test-data/commit/e850444e3a90a93f972ce872e96a567de0e0c356) Thanks [@jaikamat](https://github.com/jaikamat)! - create ProductVariant

- [#214](https://github.com/commercetools/test-data/pull/214) [`115256a`](https://github.com/commercetools/test-data/commit/115256a627aca1470014297938557c91c1f2f549) Thanks [@valoriecarli](https://github.com/valoriecarli)! - add graphql draft representation to image

### Patch Changes

- Updated dependencies [[`ba91abc`](https://github.com/commercetools/test-data/commit/ba91abca0afd7ca67f9bc68a30cfdc2ce0f728c6), [`c195aa5`](https://github.com/commercetools/test-data/commit/c195aa50342d8a94a789bc3816774f2e8b57267a), [`c6d5c43`](https://github.com/commercetools/test-data/commit/c6d5c438d994c83d1578809f1ab8d54ce9a333cb), [`115256a`](https://github.com/commercetools/test-data/commit/115256a627aca1470014297938557c91c1f2f549)]:
  - @commercetools-test-data/commons@4.10.0
  - @commercetools-test-data/attribute@4.10.0
  - @commercetools-test-data/image@4.10.0
  - @commercetools-test-data/price@4.10.0
  - @commercetools-test-data/core@4.10.0
  - @commercetools-test-data/utils@4.10.0
