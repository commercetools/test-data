# @commercetools-test-data/commons

## 4.1.0

### Minor Changes

- [#140](https://github.com/commercetools/test-data/pull/140) [`0ee1463`](https://github.com/commercetools/test-data/commit/0ee14631bc546c6fabf1150bd6a024cea8335674) Thanks [@valoriecarli](https://github.com/valoriecarli)! - feat(customer): add customer and customer draft models

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@4.1.0

## 4.0.3

### Patch Changes

- [#150](https://github.com/commercetools/test-data/pull/150) [`4f87f72`](https://github.com/commercetools/test-data/commit/4f87f72c0a1c3530392b2002f6fb3fa9dba58221) Thanks [@NickDevG](https://github.com/NickDevG)! - fix(localized-string): to-localized-field to return null when no value is received

- Updated dependencies []:
  - @commercetools-test-data/core@4.0.3

## 4.0.2

### Patch Changes

- [#147](https://github.com/commercetools/test-data/pull/147) [`7f5a9a5`](https://github.com/commercetools/test-data/commit/7f5a9a5c44520dacaede323d4cb1ab7108ee1240) Thanks [@NickDevG](https://github.com/NickDevG)! - fix(faker): updating deprecated fields

- Updated dependencies [[`7f5a9a5`](https://github.com/commercetools/test-data/commit/7f5a9a5c44520dacaede323d4cb1ab7108ee1240)]:
  - @commercetools-test-data/core@4.0.2

## 4.0.1

### Patch Changes

- [#145](https://github.com/commercetools/test-data/pull/145) [`467ac5f`](https://github.com/commercetools/test-data/commit/467ac5f041a733b05d71b7c3d69723369e658e17) Thanks [@NickDevG](https://github.com/NickDevG)! - fix(address): replacing depracated fake address function

- Updated dependencies []:
  - @commercetools-test-data/core@4.0.1

## 4.0.0

### Minor Changes

- [#143](https://github.com/commercetools/test-data/pull/143) [`ad6754d`](https://github.com/commercetools/test-data/commit/ad6754d23149a66d9ea6cb5695415a0a8e909539) Thanks [@emmenko](https://github.com/emmenko)! - Adjust graphql transformers to use given properties data. This fixes a regression when overwriting certain model fields.

  For example, when building a `Channel` the `name` property can be overwritten with a `LocalizedString` model.

  ```js
  Channel.random().name(LocalizedString.random().en('Store')).buildGraphql();
  ```

  This resulted in the `nameAllLocales` field to NOT include the `Store` value for the `en` locale.

  Now this is fixed and working as expected. Similarly, other models with the same logic have been fixed.

### Patch Changes

- Updated dependencies [[`ad6754d`](https://github.com/commercetools/test-data/commit/ad6754d23149a66d9ea6cb5695415a0a8e909539)]:
  - @commercetools-test-data/core@4.0.0

## 3.1.2

### Patch Changes

- [#135](https://github.com/commercetools/test-data/pull/135) [`7ef8141`](https://github.com/commercetools/test-data/commit/7ef8141cdbf024791101168e0211211b22d8085c) Thanks [@emmenko](https://github.com/emmenko)! - Fix faker deprecated methods

- Updated dependencies [[`7ef8141`](https://github.com/commercetools/test-data/commit/7ef8141cdbf024791101168e0211211b22d8085c)]:
  - @commercetools-test-data/core@3.1.2

## 3.1.1

### Patch Changes

- [#131](https://github.com/commercetools/test-data/pull/131) [`44a122e`](https://github.com/commercetools/test-data/commit/44a122e1cf9fbd8c57d5453bdcff0fb1d7b4091a) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @faker-js/faker to v7

- Updated dependencies [[`44a122e`](https://github.com/commercetools/test-data/commit/44a122e1cf9fbd8c57d5453bdcff0fb1d7b4091a)]:
  - @commercetools-test-data/core@3.1.1

## 3.1.0

### Minor Changes

- [#127](https://github.com/commercetools/test-data/pull/127) [`1788be7`](https://github.com/commercetools/test-data/commit/1788be7b8032a4720cd4dcd4ae069b21b276c36d) Thanks [@emmenko](https://github.com/emmenko)! - Add `AddressDraft` model.

  ```ts
  import {
    AddressDraft,
    type TAddressDraft,
  } from '@commercetools-test-data/commons';

  const addressDraft = AddressDraft.random().build<TAddressDraft>();
  ```

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@3.1.0

## 3.0.2

### Patch Changes

- [#126](https://github.com/commercetools/test-data/pull/126) [`4c94ecc`](https://github.com/commercetools/test-data/commit/4c94ecc68d2481d9c13fd92c0c058430fb79f746) Thanks [@emmenko](https://github.com/emmenko)! - Update platform-sdk dependency

* [#124](https://github.com/commercetools/test-data/pull/124) [`0331f2e`](https://github.com/commercetools/test-data/commit/0331f2ea16689523908b71199934456673b9af39) Thanks [@emmenko](https://github.com/emmenko)! - Update license year

* Updated dependencies [[`0331f2e`](https://github.com/commercetools/test-data/commit/0331f2ea16689523908b71199934456673b9af39)]:
  - @commercetools-test-data/core@3.0.2

## 3.0.1

### Patch Changes

- [#119](https://github.com/commercetools/test-data/pull/119) [`163ed6c`](https://github.com/commercetools/test-data/commit/163ed6c829c5c7104d7c7d5b53a84f229f65590b) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies

* [#119](https://github.com/commercetools/test-data/pull/119) [`163ed6c`](https://github.com/commercetools/test-data/commit/163ed6c829c5c7104d7c7d5b53a84f229f65590b) Thanks [@emmenko](https://github.com/emmenko)! - Replace deprecated method `name.title()` with `name.jobTitle()`.

* Updated dependencies [[`163ed6c`](https://github.com/commercetools/test-data/commit/163ed6c829c5c7104d7c7d5b53a84f229f65590b)]:
  - @commercetools-test-data/core@3.0.1

## 3.0.0

### Major Changes

- [#116](https://github.com/commercetools/test-data/pull/116) [`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb) Thanks [@emmenko](https://github.com/emmenko)! - Remove field `countryName`, as it never existed in the API model.

  In tests, we recommend to explicitly set the `country` field and derive the localized country name. For example for `de` it would be `Germany`, given that the application locale is set to `en`.

  Furthermore, the `Initiator` model has been replaced by `ClientLogging`, as the base model. Only the GraphQL version of `ClientLogging` is typed as `Initiator`.

### Minor Changes

- [#113](https://github.com/commercetools/test-data/pull/113) [`1912f11`](https://github.com/commercetools/test-data/commit/1912f117609bd6c46e8bb1e748c159305af5b449) Thanks [@emmenko](https://github.com/emmenko)! - Add model for `Address`.

### Patch Changes

- [#113](https://github.com/commercetools/test-data/pull/113) [`1912f11`](https://github.com/commercetools/test-data/commit/1912f117609bd6c46e8bb1e748c159305af5b449) Thanks [@emmenko](https://github.com/emmenko)! - Refine models and types.

* [#99](https://github.com/commercetools/test-data/pull/99) [`583f3f1`](https://github.com/commercetools/test-data/commit/583f3f169f5e91ceaef13dda773a4de10831e449) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade to Yarn v3

- [#107](https://github.com/commercetools/test-data/pull/107) [`67c1174`](https://github.com/commercetools/test-data/commit/67c11743b126faaf50705521684b8cb33d76b141) Thanks [@dogayuksel](https://github.com/dogayuksel)! - Replace deleted fakerjs library with the new community package (fakerjs.dev)

* [#116](https://github.com/commercetools/test-data/pull/116) [`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb) Thanks [@emmenko](https://github.com/emmenko)! - Use [generated API spec types](https://www.npmjs.com/package/@commercetools/platform-sdk) to type the REST models.

- [#112](https://github.com/commercetools/test-data/pull/112) [`e2f4089`](https://github.com/commercetools/test-data/commit/e2f40895f25d07b2223bd99dcb01410f356c3de1) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies

- Updated dependencies [[`59142b6`](https://github.com/commercetools/test-data/commit/59142b637a54f66f13bd5c8d7eafa579f06836cb), [`583f3f1`](https://github.com/commercetools/test-data/commit/583f3f169f5e91ceaef13dda773a4de10831e449), [`67c1174`](https://github.com/commercetools/test-data/commit/67c11743b126faaf50705521684b8cb33d76b141), [`e2f4089`](https://github.com/commercetools/test-data/commit/e2f40895f25d07b2223bd99dcb01410f356c3de1)]:
  - @commercetools-test-data/core@3.0.0

## 2.4.1

### Patch Changes

- Updated dependencies [[`3a8d03e`](https://github.com/commercetools/test-data/commit/3a8d03e14fc166bddc8e57039b6c379ef2d0904e), [`2085e1e`](https://github.com/commercetools/test-data/commit/2085e1ea59a923e2fbc5a24d33e2ac65de816978)]:
  - @commercetools-test-data/core@2.4.1

## 2.4.0

### Minor Changes

- [#69](https://github.com/commercetools/test-data/pull/69) [`cc1789d`](https://github.com/commercetools/test-data/commit/cc1789d77a3b6d12e6f44cb8edc6447aba0141c1) Thanks [@adnasa](https://github.com/adnasa)! - Fix Reference to distinguish expanded `graphql and`rest` shape respectively

### Patch Changes

- [#73](https://github.com/commercetools/test-data/pull/73) [`747e744`](https://github.com/commercetools/test-data/commit/747e7446ada62f6407ab8c3e2a66997c30a7821d) Thanks [@adnasa](https://github.com/adnasa)! - Update LICENSE

- Updated dependencies [[`747e744`](https://github.com/commercetools/test-data/commit/747e7446ada62f6407ab8c3e2a66997c30a7821d)]:
  - @commercetools-test-data/core@2.4.0

## 2.3.0

### Minor Changes

- [#67](https://github.com/commercetools/test-data/pull/67) [`3e36d52`](https://github.com/commercetools/test-data/commit/3e36d5214d002309d7f3107c3ffda09a5bfdc048) Thanks [@emmenko](https://github.com/emmenko)! - Use `faker` v5

### Patch Changes

- Updated dependencies [[`3e36d52`](https://github.com/commercetools/test-data/commit/3e36d5214d002309d7f3107c3ffda09a5bfdc048)]:
  - @commercetools-test-data/core@2.3.0

## 2.2.0

### Minor Changes

- [#58](https://github.com/commercetools/test-data/pull/58) [`288b012`](https://github.com/commercetools/test-data/commit/288b012823c7df21b01dd29a7d11bd724c39e407) Thanks [@adnasa](https://github.com/adnasa)! - add `Reference` and `Initiator`

## 2.1.2

### Patch Changes

- [#52](https://github.com/commercetools/test-data/pull/52) [`54b4586`](https://github.com/commercetools/test-data/commit/54b4586fea89dbef8bd6086eeeaeae52e6a3a394) Thanks [@renovate](https://github.com/apps/renovate)! - chore: update all deps

- Updated dependencies [[`54b4586`](https://github.com/commercetools/test-data/commit/54b4586fea89dbef8bd6086eeeaeae52e6a3a394)]:
  - @commercetools-test-data/core@2.1.2

## 2.1.1

### Patch Changes

- [`f1361f9`](https://github.com/commercetools/test-data/commit/f1361f914f60e4b86150e2ddbc0e549d18bc4dd7) [#42](https://github.com/commercetools/test-data/pull/42) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

* [`55e636e`](https://github.com/commercetools/test-data/commit/55e636ea480e8bc9114da345641928a9696b773c) [#40](https://github.com/commercetools/test-data/pull/40) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade preconstruct CLI to v2 for bundling.

* Updated dependencies [[`f1361f9`](https://github.com/commercetools/test-data/commit/f1361f914f60e4b86150e2ddbc0e549d18bc4dd7), [`55e636e`](https://github.com/commercetools/test-data/commit/55e636ea480e8bc9114da345641928a9696b773c)]:
  - @commercetools-test-data/core@2.1.1

## 2.1.0

### Minor Changes

- [`965dce5`](https://github.com/commercetools/test-data/commit/965dce5860972e92f09010793bbfacddeb35266f) [#38](https://github.com/commercetools/test-data/pull/38) Thanks [@emmenko](https://github.com/emmenko)! - Compile and bundle packages using [preconstruct](https://preconstruct.tools)

### Patch Changes

- Updated dependencies [[`965dce5`](https://github.com/commercetools/test-data/commit/965dce5860972e92f09010793bbfacddeb35266f)]:
  - @commercetools-test-data/core@2.1.0

## 2.0.1

### Patch Changes

- [`95b701b`](https://github.com/commercetools/test-data/commit/95b701b4445cb3374b43a4efc81eef6b31f88536) [#27](https://github.com/commercetools/test-data/pull/27) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`95b701b`](https://github.com/commercetools/test-data/commit/95b701b4445cb3374b43a4efc81eef6b31f88536)]:
  - @commercetools-test-data/core@2.0.1

## 2.0.0

### Major Changes

- [`0c35ac4`](https://github.com/commercetools/test-data/commit/0c35ac491d3ff8703f5d6293a73acfdb607410cd) [#24](https://github.com/commercetools/test-data/pull/24) Thanks [@pa3](https://github.com/pa3)! - drop `default` prop from builder initializer

### Patch Changes

- Updated dependencies [[`0c35ac4`](https://github.com/commercetools/test-data/commit/0c35ac491d3ff8703f5d6293a73acfdb607410cd)]:
  - @commercetools-test-data/core@2.0.0

## 1.1.3

### Patch Changes

- [`b9953cc`](https://github.com/commercetools/test-data/commit/b9953ccc5d497dc337226984fe2f6529063000fa) [#20](https://github.com/commercetools/test-data/pull/20) Thanks [@pa3](https://github.com/pa3)! - Filter out empty translations from LocalizedString

## 1.1.2

### Patch Changes

- [`d7932e1`](https://github.com/commercetools/test-data/commit/d7932e125cb31c88eee4fa99312774d0ed838af5) [#17](https://github.com/commercetools/test-data/pull/17) Thanks [@emmenko](https://github.com/emmenko)! - Fix type declarations generation to only include declarations files of each specific package

- Updated dependencies [[`d7932e1`](https://github.com/commercetools/test-data/commit/d7932e125cb31c88eee4fa99312774d0ed838af5)]:
  - @commercetools-test-data/core@1.1.2

## 1.1.1

### Patch Changes

- [`716fad7`](https://github.com/commercetools/test-data/commit/716fad74520d8bacf895756f5fffaef1216d2f69) [#15](https://github.com/commercetools/test-data/pull/15) Thanks [@emmenko](https://github.com/emmenko)! - Fix bundle compatibility with browser environments

- Updated dependencies [[`716fad7`](https://github.com/commercetools/test-data/commit/716fad74520d8bacf895756f5fffaef1216d2f69)]:
  - @commercetools-test-data/core@1.1.1

## 1.1.0

### Minor Changes

- [`8384239`](https://github.com/commercetools/test-data/commit/83842397840665a59eaaf2eee7b96b21e9867067) [#12](https://github.com/commercetools/test-data/pull/12) Thanks [@emmenko](https://github.com/emmenko)! - Add new model for `LocalizedString` type

### Patch Changes

- Updated dependencies [[`8384239`](https://github.com/commercetools/test-data/commit/83842397840665a59eaaf2eee7b96b21e9867067)]:
  - @commercetools-test-data/core@1.1.0
