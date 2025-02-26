# @commercetools-test-data/inventory-entry

## 10.13.0

### Patch Changes

- Updated dependencies [[`1ab50ac`](https://github.com/commercetools/test-data/commit/1ab50ac8a071bbe8acbce1160ff6a7248640a9b3), [`98102ed`](https://github.com/commercetools/test-data/commit/98102ed22a27a569ac4d026e8d8198a9aed182ed)]:
  - @commercetools-test-data/commons@10.13.0
  - @commercetools-test-data/product@10.13.0
  - @commercetools-test-data/channel@10.13.0
  - @commercetools-test-data/core@10.13.0
  - @commercetools-test-data/graphql-types@10.13.0
  - @commercetools-test-data/utils@10.13.0

## 10.12.0

### Patch Changes

- Updated dependencies [[`608b432`](https://github.com/commercetools/test-data/commit/608b43292e563e0b07e276b576c5383a3d42d79b), [`e374c6f`](https://github.com/commercetools/test-data/commit/e374c6feaa5fd15799374fec83d1d0da28d36614), [`e374c6f`](https://github.com/commercetools/test-data/commit/e374c6feaa5fd15799374fec83d1d0da28d36614), [`608b432`](https://github.com/commercetools/test-data/commit/608b43292e563e0b07e276b576c5383a3d42d79b)]:
  - @commercetools-test-data/commons@10.12.0
  - @commercetools-test-data/product@10.12.0
  - @commercetools-test-data/channel@10.12.0
  - @commercetools-test-data/core@10.12.0
  - @commercetools-test-data/graphql-types@10.12.0
  - @commercetools-test-data/utils@10.12.0

## 10.11.2

### Patch Changes

- [#732](https://github.com/commercetools/test-data/pull/732) [`b247e64`](https://github.com/commercetools/test-data/commit/b247e64947b97ecb9a438b99ddfa14a833e6ff90) Thanks [@jaikamat](https://github.com/jaikamat)! - Fix export formatting

- Updated dependencies []:
  - @commercetools-test-data/core@10.11.2
  - @commercetools-test-data/graphql-types@10.11.2
  - @commercetools-test-data/channel@10.11.2
  - @commercetools-test-data/commons@10.11.2
  - @commercetools-test-data/product@10.11.2
  - @commercetools-test-data/utils@10.11.2

## 10.11.1

### Patch Changes

- Updated dependencies [[`a83c452`](https://github.com/commercetools/test-data/commit/a83c452340799c3773462b3938910065cd934bec)]:
  - @commercetools-test-data/graphql-types@10.11.1
  - @commercetools-test-data/channel@10.11.1
  - @commercetools-test-data/commons@10.11.1
  - @commercetools-test-data/product@10.11.1
  - @commercetools-test-data/core@10.11.1
  - @commercetools-test-data/utils@10.11.1

## 10.11.0

### Patch Changes

- [#727](https://github.com/commercetools/test-data/pull/727) [`cccf9fe`](https://github.com/commercetools/test-data/commit/cccf9fe8c079f847dbf0c6a3f64163fc48b55ae4) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - B2C Lifestyle Presets: Added inventory entries without channels to support Launchpad.

- [#650](https://github.com/commercetools/test-data/pull/650) [`8038c61`](https://github.com/commercetools/test-data/commit/8038c61d9506acebbc8f020b915367bdf87a81fa) Thanks [@jaikumar-tj](https://github.com/jaikumar-tj)! - ### Common Model (`common`)

  - Introduced a new model called `discounted-price`.

  ### Inventory Entry Model (`inventory-entry`)

  - Updated the transformer file to conditionally send the supply channel, making it optional.

  ### Product Type (`product-type`)

  - Added new presets for enum and localized enum types.

- Updated dependencies [[`3aff52c`](https://github.com/commercetools/test-data/commit/3aff52c4413e6201b6df12ca47759e687bcbd86d), [`3afc6db`](https://github.com/commercetools/test-data/commit/3afc6db3895ecfcef3bb0ba3c12e62ae4e6379dd), [`8038c61`](https://github.com/commercetools/test-data/commit/8038c61d9506acebbc8f020b915367bdf87a81fa)]:
  - @commercetools-test-data/product@10.11.0
  - @commercetools-test-data/commons@10.11.0
  - @commercetools-test-data/channel@10.11.0
  - @commercetools-test-data/core@10.11.0
  - @commercetools-test-data/graphql-types@10.11.0
  - @commercetools-test-data/utils@10.11.0

## 10.10.1

### Patch Changes

- Updated dependencies [[`2ff2954`](https://github.com/commercetools/test-data/commit/2ff295413c3d3bc1c04d4f134da74f5e3e98f40e)]:
  - @commercetools-test-data/channel@10.10.1
  - @commercetools-test-data/product@10.10.1
  - @commercetools-test-data/core@10.10.1
  - @commercetools-test-data/commons@10.10.1
  - @commercetools-test-data/utils@10.10.1

## 10.10.0

### Minor Changes

- [#703](https://github.com/commercetools/test-data/pull/703) [`a2a8f73`](https://github.com/commercetools/test-data/commit/a2a8f732a35bbba8744d3b75993c06b26c9752ab) Thanks [@jmcreasman](https://github.com/jmcreasman)! - Refactored `InventoryEntry` and `InventoryEntryDraft` models to use the new implementation patterns.
  This means the existing models are now deprecated (though we still support them for backwards compatibility) and consumers should move to the new ones implemented:
  - `InventoryEntryRest`
  - `InventoryEntryGraphql`
  - `InventoryEntryDraftRest`
  - `InventoryEntryDraftGraphql`

### Patch Changes

- Updated dependencies [[`2f02fac`](https://github.com/commercetools/test-data/commit/2f02fac9b5eb06197f1d4c2f0509ff10d2c5ef6c), [`ac18883`](https://github.com/commercetools/test-data/commit/ac188833fd16f09d109fb420aa2d24d0505da917)]:
  - @commercetools-test-data/product@10.10.0
  - @commercetools-test-data/channel@10.10.0
  - @commercetools-test-data/core@10.10.0
  - @commercetools-test-data/commons@10.10.0
  - @commercetools-test-data/utils@10.10.0

## 10.9.3

### Patch Changes

- Updated dependencies [[`073ec7d`](https://github.com/commercetools/test-data/commit/073ec7d34ae62c672df194bbcb56aa42fc862867)]:
  - @commercetools-test-data/commons@10.9.3
  - @commercetools-test-data/channel@10.9.3
  - @commercetools-test-data/product@10.9.3
  - @commercetools-test-data/core@10.9.3
  - @commercetools-test-data/utils@10.9.3

## 10.9.2

### Patch Changes

- Updated dependencies [[`0e2404c`](https://github.com/commercetools/test-data/commit/0e2404c997a4afb772dc32c53595fb350c0991e4), [`0e2404c`](https://github.com/commercetools/test-data/commit/0e2404c997a4afb772dc32c53595fb350c0991e4), [`0e2404c`](https://github.com/commercetools/test-data/commit/0e2404c997a4afb772dc32c53595fb350c0991e4)]:
  - @commercetools-test-data/commons@10.9.2
  - @commercetools-test-data/product@10.9.2
  - @commercetools-test-data/channel@10.9.2
  - @commercetools-test-data/core@10.9.2
  - @commercetools-test-data/utils@10.9.2

## 10.9.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/product@10.9.1
  - @commercetools-test-data/commons@10.9.1
  - @commercetools-test-data/channel@10.9.1
  - @commercetools-test-data/core@10.9.1
  - @commercetools-test-data/utils@10.9.1

## 10.9.0

### Patch Changes

- Updated dependencies [[`b983780`](https://github.com/commercetools/test-data/commit/b9837802e3b4b96a0cd20ec7ffd1f87fb1f5168b)]:
  - @commercetools-test-data/commons@10.9.0
  - @commercetools-test-data/channel@10.9.0
  - @commercetools-test-data/product@10.9.0
  - @commercetools-test-data/core@10.9.0
  - @commercetools-test-data/utils@10.9.0

## 10.8.1

### Patch Changes

- Updated dependencies [[`4599846`](https://github.com/commercetools/test-data/commit/459984623f345f5d21141624cb26e65d38f02f93), [`4599846`](https://github.com/commercetools/test-data/commit/459984623f345f5d21141624cb26e65d38f02f93)]:
  - @commercetools-test-data/core@10.8.1
  - @commercetools-test-data/commons@10.8.1
  - @commercetools-test-data/channel@10.8.1
  - @commercetools-test-data/product@10.8.1
  - @commercetools-test-data/utils@10.8.1

## 10.8.0

### Patch Changes

- Updated dependencies [[`6bdcbe6`](https://github.com/commercetools/test-data/commit/6bdcbe6c75b49aa6d6258ad3c64230bb8c19de03), [`1e2bba1`](https://github.com/commercetools/test-data/commit/1e2bba10e41fd1b7dabc71b0bc2166c538bf6ee8)]:
  - @commercetools-test-data/channel@10.8.0
  - @commercetools-test-data/commons@10.8.0
  - @commercetools-test-data/core@10.8.0
  - @commercetools-test-data/product@10.8.0
  - @commercetools-test-data/utils@10.8.0

## 10.7.1

### Patch Changes

- Updated dependencies [[`7c08fa2`](https://github.com/commercetools/test-data/commit/7c08fa25a8d9a906401fffeb8b92f20e9358bdce)]:
  - @commercetools-test-data/commons@10.7.1
  - @commercetools-test-data/channel@10.7.1
  - @commercetools-test-data/product@10.7.1
  - @commercetools-test-data/core@10.7.1
  - @commercetools-test-data/utils@10.7.1

## 10.7.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@10.7.0
  - @commercetools-test-data/channel@10.7.0
  - @commercetools-test-data/commons@10.7.0
  - @commercetools-test-data/product@10.7.0
  - @commercetools-test-data/utils@10.7.0

## 10.6.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/product@10.6.1
  - @commercetools-test-data/core@10.6.1
  - @commercetools-test-data/channel@10.6.1
  - @commercetools-test-data/commons@10.6.1
  - @commercetools-test-data/utils@10.6.1

## 10.6.0

### Patch Changes

- Updated dependencies [[`8a16662`](https://github.com/commercetools/test-data/commit/8a1666229d82d9ed37b7b5baa4d8083b72e3d3c8)]:
  - @commercetools-test-data/commons@10.6.0
  - @commercetools-test-data/channel@10.6.0
  - @commercetools-test-data/product@10.6.0
  - @commercetools-test-data/core@10.6.0
  - @commercetools-test-data/utils@10.6.0

## 10.5.2

### Patch Changes

- [#672](https://github.com/commercetools/test-data/pull/672) [`8a124d6`](https://github.com/commercetools/test-data/commit/8a124d687e435db4adaa1f09a4b4a45f7f30160c) Thanks [@ragafus](https://github.com/ragafus)! - Bump @commercetools/platform-sdk dependency version

- Updated dependencies [[`8a124d6`](https://github.com/commercetools/test-data/commit/8a124d687e435db4adaa1f09a4b4a45f7f30160c)]:
  - @commercetools-test-data/channel@10.5.2
  - @commercetools-test-data/commons@10.5.2
  - @commercetools-test-data/product@10.5.2
  - @commercetools-test-data/core@10.5.2
  - @commercetools-test-data/utils@10.5.2

## 10.5.1

### Patch Changes

- Updated dependencies [[`9985834`](https://github.com/commercetools/test-data/commit/9985834ab7cf95fb533a7f1e38c306b88dfe10cc)]:
  - @commercetools-test-data/product@10.5.1
  - @commercetools-test-data/core@10.5.1
  - @commercetools-test-data/channel@10.5.1
  - @commercetools-test-data/commons@10.5.1
  - @commercetools-test-data/utils@10.5.1

## 10.5.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@10.5.0
  - @commercetools-test-data/channel@10.5.0
  - @commercetools-test-data/commons@10.5.0
  - @commercetools-test-data/product@10.5.0
  - @commercetools-test-data/utils@10.5.0

## 10.4.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@10.4.0
  - @commercetools-test-data/channel@10.4.0
  - @commercetools-test-data/commons@10.4.0
  - @commercetools-test-data/product@10.4.0
  - @commercetools-test-data/utils@10.4.0

## 10.3.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@10.3.0
  - @commercetools-test-data/channel@10.3.0
  - @commercetools-test-data/commons@10.3.0
  - @commercetools-test-data/product@10.3.0
  - @commercetools-test-data/utils@10.3.0

## 10.2.0

### Patch Changes

- Updated dependencies [[`e44812f`](https://github.com/commercetools/test-data/commit/e44812f21c71af531acd22bfc1100364b8ead8da), [`e44812f`](https://github.com/commercetools/test-data/commit/e44812f21c71af531acd22bfc1100364b8ead8da)]:
  - @commercetools-test-data/product@10.2.0
  - @commercetools-test-data/core@10.2.0
  - @commercetools-test-data/channel@10.2.0
  - @commercetools-test-data/commons@10.2.0
  - @commercetools-test-data/utils@10.2.0

## 10.1.4

### Patch Changes

- Updated dependencies [[`d25c8b7`](https://github.com/commercetools/test-data/commit/d25c8b7bc6cf56dc17e702f092b66a8e98c49d74)]:
  - @commercetools-test-data/product@10.1.4
  - @commercetools-test-data/core@10.1.4
  - @commercetools-test-data/channel@10.1.4
  - @commercetools-test-data/commons@10.1.4
  - @commercetools-test-data/utils@10.1.4

## 10.1.3

### Patch Changes

- Updated dependencies [[`195962b`](https://github.com/commercetools/test-data/commit/195962b646d5825c2933d4a6decafe2061693e37)]:
  - @commercetools-test-data/product@10.1.3
  - @commercetools-test-data/core@10.1.3
  - @commercetools-test-data/channel@10.1.3
  - @commercetools-test-data/commons@10.1.3
  - @commercetools-test-data/utils@10.1.3

## 10.1.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@10.1.2
  - @commercetools-test-data/channel@10.1.2
  - @commercetools-test-data/commons@10.1.2
  - @commercetools-test-data/product@10.1.2
  - @commercetools-test-data/utils@10.1.2

## 10.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@10.1.1
  - @commercetools-test-data/channel@10.1.1
  - @commercetools-test-data/commons@10.1.1
  - @commercetools-test-data/product@10.1.1
  - @commercetools-test-data/utils@10.1.1

## 10.1.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@10.1.0
  - @commercetools-test-data/channel@10.1.0
  - @commercetools-test-data/commons@10.1.0
  - @commercetools-test-data/product@10.1.0
  - @commercetools-test-data/utils@10.1.0

## 10.0.0

### Major Changes

- [#628](https://github.com/commercetools/test-data/pull/628) [`5e4d863`](https://github.com/commercetools/test-data/commit/5e4d8635485e876de88385890eb5c5940f872655) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - Renamed GoodStore dataset to B2C Lifestyle to support Foundry.

  This breaking change updates the export method for GoodStore, now B2C Lifestyle, presets. Presets that use this dataset are also updated.

  Updating this package will require changes in your codebase. To migrate:

  - Replace any instance of `<Entity>.presets.sampleDataGoodStore.<preset-name>()` with `<Entity>.presets.sampleDataB2CLifestyle.<preset-name>()`

### Patch Changes

- Updated dependencies [[`a4e8796`](https://github.com/commercetools/test-data/commit/a4e8796b7f733ffc39ca45cbb614c76f0af8cc4e), [`5e4d863`](https://github.com/commercetools/test-data/commit/5e4d8635485e876de88385890eb5c5940f872655), [`29ab14e`](https://github.com/commercetools/test-data/commit/29ab14e9c41e72fe5ca556a59dc407ca823d15dd), [`827861f`](https://github.com/commercetools/test-data/commit/827861fe7d04e297cfed09efd4646659f8e260d1), [`a4e8796`](https://github.com/commercetools/test-data/commit/a4e8796b7f733ffc39ca45cbb614c76f0af8cc4e)]:
  - @commercetools-test-data/product@10.0.0
  - @commercetools-test-data/channel@10.0.0
  - @commercetools-test-data/commons@10.0.0
  - @commercetools-test-data/core@10.0.0
  - @commercetools-test-data/utils@10.0.0

## 9.0.7

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.7
  - @commercetools-test-data/channel@9.0.7
  - @commercetools-test-data/commons@9.0.7
  - @commercetools-test-data/product@9.0.7
  - @commercetools-test-data/utils@9.0.7

## 9.0.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/product@9.0.6
  - @commercetools-test-data/core@9.0.6
  - @commercetools-test-data/channel@9.0.6
  - @commercetools-test-data/commons@9.0.6
  - @commercetools-test-data/utils@9.0.6

## 9.0.5

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/product@9.0.5
  - @commercetools-test-data/core@9.0.5
  - @commercetools-test-data/channel@9.0.5
  - @commercetools-test-data/commons@9.0.5
  - @commercetools-test-data/utils@9.0.5

## 9.0.4

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.4
  - @commercetools-test-data/channel@9.0.4
  - @commercetools-test-data/commons@9.0.4
  - @commercetools-test-data/product@9.0.4
  - @commercetools-test-data/utils@9.0.4

## 9.0.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.3
  - @commercetools-test-data/channel@9.0.3
  - @commercetools-test-data/commons@9.0.3
  - @commercetools-test-data/product@9.0.3
  - @commercetools-test-data/utils@9.0.3

## 9.0.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.2
  - @commercetools-test-data/channel@9.0.2
  - @commercetools-test-data/commons@9.0.2
  - @commercetools-test-data/product@9.0.2
  - @commercetools-test-data/utils@9.0.2

## 9.0.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@9.0.1
  - @commercetools-test-data/channel@9.0.1
  - @commercetools-test-data/commons@9.0.1
  - @commercetools-test-data/product@9.0.1
  - @commercetools-test-data/utils@9.0.1

## 9.0.0

### Major Changes

- [#601](https://github.com/commercetools/test-data/pull/601) [`42e42c3`](https://github.com/commercetools/test-data/commit/42e42c3c020d98a73ef45883094a27f3ed116b12) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - This breaking change updates the export method for Reference and ReferenceDraft presets to simplify the call syntax. Models that use these presets in their generators or transformers are also updated.

  Updating this package will require changes in your codebase. To migrate:

  - Replace any instance of `Reference.presets.<preset-name>.<preset-name>()` with `Reference.presets.<preset-name>()`
  - Replace any instance of `ReferenceDraft.presets.<preset-name>.<preset-name>()` with `ReferenceDraft.presets.<preset-name>()`

### Patch Changes

- Updated dependencies [[`42e42c3`](https://github.com/commercetools/test-data/commit/42e42c3c020d98a73ef45883094a27f3ed116b12)]:
  - @commercetools-test-data/commons@9.0.0
  - @commercetools-test-data/channel@9.0.0
  - @commercetools-test-data/product@9.0.0
  - @commercetools-test-data/core@9.0.0
  - @commercetools-test-data/utils@9.0.0

## 8.5.0

### Patch Changes

- Updated dependencies [[`46bf7f4`](https://github.com/commercetools/test-data/commit/46bf7f43f79adf3d311eb081af95dbce4e1f1f3b)]:
  - @commercetools-test-data/product@8.5.0
  - @commercetools-test-data/core@8.5.0
  - @commercetools-test-data/channel@8.5.0
  - @commercetools-test-data/commons@8.5.0
  - @commercetools-test-data/utils@8.5.0

## 8.4.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.4.0
  - @commercetools-test-data/channel@8.4.0
  - @commercetools-test-data/commons@8.4.0
  - @commercetools-test-data/product@8.4.0
  - @commercetools-test-data/utils@8.4.0

## 8.3.0

### Patch Changes

- [#593](https://github.com/commercetools/test-data/pull/593) [`a5c62fb`](https://github.com/commercetools/test-data/commit/a5c62fbc47acbc4bb113b7c35e6dc1b908eadf43) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Adds Channel-specific Prices and Inventory Entries.

- Updated dependencies [[`a5c62fb`](https://github.com/commercetools/test-data/commit/a5c62fbc47acbc4bb113b7c35e6dc1b908eadf43)]:
  - @commercetools-test-data/product@8.3.0
  - @commercetools-test-data/core@8.3.0
  - @commercetools-test-data/channel@8.3.0
  - @commercetools-test-data/commons@8.3.0
  - @commercetools-test-data/utils@8.3.0

## 8.2.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.2.2
  - @commercetools-test-data/channel@8.2.2
  - @commercetools-test-data/commons@8.2.2
  - @commercetools-test-data/product@8.2.2
  - @commercetools-test-data/utils@8.2.2

## 8.2.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.2.1
  - @commercetools-test-data/channel@8.2.1
  - @commercetools-test-data/commons@8.2.1
  - @commercetools-test-data/product@8.2.1
  - @commercetools-test-data/utils@8.2.1

## 8.2.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.2.0
  - @commercetools-test-data/channel@8.2.0
  - @commercetools-test-data/commons@8.2.0
  - @commercetools-test-data/product@8.2.0
  - @commercetools-test-data/utils@8.2.0

## 8.1.1

### Patch Changes

- Updated dependencies [[`9916819`](https://github.com/commercetools/test-data/commit/991681926e766ae4da115621b10e581c518e8230)]:
  - @commercetools-test-data/commons@8.1.1
  - @commercetools-test-data/channel@8.1.1
  - @commercetools-test-data/product@8.1.1
  - @commercetools-test-data/core@8.1.1
  - @commercetools-test-data/utils@8.1.1

## 8.1.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@8.1.0
  - @commercetools-test-data/channel@8.1.0
  - @commercetools-test-data/commons@8.1.0
  - @commercetools-test-data/product@8.1.0
  - @commercetools-test-data/utils@8.1.0

## 8.0.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/product@8.0.0
  - @commercetools-test-data/core@8.0.0
  - @commercetools-test-data/channel@8.0.0
  - @commercetools-test-data/commons@8.0.0
  - @commercetools-test-data/utils@8.0.0

## 7.11.0

### Patch Changes

- Updated dependencies [[`22b1cce`](https://github.com/commercetools/test-data/commit/22b1cce82bf29d98bc117bd866b5a258b89f5cca), [`b04b275`](https://github.com/commercetools/test-data/commit/b04b275f6fc1287cfc150d4d90a763bcef07b591)]:
  - @commercetools-test-data/utils@7.11.0
  - @commercetools-test-data/commons@7.11.0
  - @commercetools-test-data/channel@7.11.0
  - @commercetools-test-data/product@7.11.0
  - @commercetools-test-data/core@7.11.0

## 7.10.0

### Patch Changes

- Updated dependencies [[`0e79552`](https://github.com/commercetools/test-data/commit/0e79552f289ff3a5110abdb61d87d18d50499a31)]:
  - @commercetools-test-data/commons@7.10.0
  - @commercetools-test-data/channel@7.10.0
  - @commercetools-test-data/product@7.10.0
  - @commercetools-test-data/core@7.10.0
  - @commercetools-test-data/utils@7.10.0

## 7.9.1

### Patch Changes

- Updated dependencies [[`b9cdca7`](https://github.com/commercetools/test-data/commit/b9cdca7651dc32104eaaf1cded548d13ad6b82fe)]:
  - @commercetools-test-data/commons@7.9.1
  - @commercetools-test-data/channel@7.9.1
  - @commercetools-test-data/product@7.9.1
  - @commercetools-test-data/core@7.9.1
  - @commercetools-test-data/utils@7.9.1

## 7.9.0

### Patch Changes

- Updated dependencies [[`5d71e0b`](https://github.com/commercetools/test-data/commit/5d71e0be9e04e3fabe2de81fc71fe1be9d1bbc5d)]:
  - @commercetools-test-data/commons@7.9.0
  - @commercetools-test-data/product@7.9.0
  - @commercetools-test-data/channel@7.9.0
  - @commercetools-test-data/core@7.9.0
  - @commercetools-test-data/utils@7.9.0

## 7.8.0

### Patch Changes

- Updated dependencies [[`b7ae1b4`](https://github.com/commercetools/test-data/commit/b7ae1b49c9c9b5b6459f64fdc2e85277761584a5)]:
  - @commercetools-test-data/product@7.8.0
  - @commercetools-test-data/core@7.8.0
  - @commercetools-test-data/channel@7.8.0
  - @commercetools-test-data/commons@7.8.0
  - @commercetools-test-data/utils@7.8.0

## 7.7.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.7.1
  - @commercetools-test-data/channel@7.7.1
  - @commercetools-test-data/commons@7.7.1
  - @commercetools-test-data/product@7.7.1
  - @commercetools-test-data/utils@7.7.1

## 7.7.0

### Patch Changes

- Updated dependencies [[`53e2e9d`](https://github.com/commercetools/test-data/commit/53e2e9d24416905f25178ef11a5be9900b4fa2e9)]:
  - @commercetools-test-data/commons@7.7.0
  - @commercetools-test-data/channel@7.7.0
  - @commercetools-test-data/product@7.7.0
  - @commercetools-test-data/core@7.7.0
  - @commercetools-test-data/utils@7.7.0

## 7.6.0

### Patch Changes

- Updated dependencies [[`daf9988`](https://github.com/commercetools/test-data/commit/daf9988b8dfa0a29a5005e08a5f21b2af5d117cf)]:
  - @commercetools-test-data/commons@7.6.0
  - @commercetools-test-data/channel@7.6.0
  - @commercetools-test-data/product@7.6.0
  - @commercetools-test-data/core@7.6.0
  - @commercetools-test-data/utils@7.6.0

## 7.5.0

### Minor Changes

- [#532](https://github.com/commercetools/test-data/pull/532) [`8c7e851`](https://github.com/commercetools/test-data/commit/8c7e851eec46668a84d7d748125dda67072e42fc) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - Revert B2B dataset back to original size

### Patch Changes

- Updated dependencies [[`8c7e851`](https://github.com/commercetools/test-data/commit/8c7e851eec46668a84d7d748125dda67072e42fc)]:
  - @commercetools-test-data/channel@7.5.0
  - @commercetools-test-data/product@7.5.0
  - @commercetools-test-data/core@7.5.0
  - @commercetools-test-data/commons@7.5.0
  - @commercetools-test-data/utils@7.5.0

## 7.4.0

### Patch Changes

- Updated dependencies [[`7a06a20`](https://github.com/commercetools/test-data/commit/7a06a2011dbc3a0f72d1b7b08ccdc8be5f1af50a)]:
  - @commercetools-test-data/channel@7.4.0
  - @commercetools-test-data/product@7.4.0
  - @commercetools-test-data/core@7.4.0
  - @commercetools-test-data/commons@7.4.0
  - @commercetools-test-data/utils@7.4.0

## 7.3.0

### Minor Changes

- [#528](https://github.com/commercetools/test-data/pull/528) [`92e57eb`](https://github.com/commercetools/test-data/commit/92e57eb577ab813685e89225c67c11040a3ea19c) Thanks [@NickDevG](https://github.com/NickDevG)! - Reduce B2B sample data

### Patch Changes

- Updated dependencies [[`92e57eb`](https://github.com/commercetools/test-data/commit/92e57eb577ab813685e89225c67c11040a3ea19c)]:
  - @commercetools-test-data/product@7.3.0
  - @commercetools-test-data/core@7.3.0
  - @commercetools-test-data/channel@7.3.0
  - @commercetools-test-data/commons@7.3.0
  - @commercetools-test-data/utils@7.3.0

## 7.2.13

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.13
  - @commercetools-test-data/channel@7.2.13
  - @commercetools-test-data/commons@7.2.13
  - @commercetools-test-data/product@7.2.13
  - @commercetools-test-data/utils@7.2.13

## 7.2.12

### Patch Changes

- [#521](https://github.com/commercetools/test-data/pull/521) [`427b78e`](https://github.com/commercetools/test-data/commit/427b78e9382ad4adae12a777b9c0bd5eb8f42087) Thanks [@NickDevG](https://github.com/NickDevG)! - Adds channel-specific Inventory entries, removes unused Inventory entries.

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.12
  - @commercetools-test-data/channel@7.2.12
  - @commercetools-test-data/commons@7.2.12
  - @commercetools-test-data/product@7.2.12
  - @commercetools-test-data/utils@7.2.12

## 7.2.11

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.11
  - @commercetools-test-data/channel@7.2.11
  - @commercetools-test-data/commons@7.2.11
  - @commercetools-test-data/product@7.2.11
  - @commercetools-test-data/utils@7.2.11

## 7.2.10

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.10
  - @commercetools-test-data/channel@7.2.10
  - @commercetools-test-data/commons@7.2.10
  - @commercetools-test-data/product@7.2.10
  - @commercetools-test-data/utils@7.2.10

## 7.2.9

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.9
  - @commercetools-test-data/channel@7.2.9
  - @commercetools-test-data/commons@7.2.9
  - @commercetools-test-data/product@7.2.9
  - @commercetools-test-data/utils@7.2.9

## 7.2.8

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/product@7.2.8
  - @commercetools-test-data/core@7.2.8
  - @commercetools-test-data/channel@7.2.8
  - @commercetools-test-data/commons@7.2.8
  - @commercetools-test-data/utils@7.2.8

## 7.2.7

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.7
  - @commercetools-test-data/channel@7.2.7
  - @commercetools-test-data/commons@7.2.7
  - @commercetools-test-data/product@7.2.7
  - @commercetools-test-data/utils@7.2.7

## 7.2.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.6
  - @commercetools-test-data/channel@7.2.6
  - @commercetools-test-data/commons@7.2.6
  - @commercetools-test-data/product@7.2.6
  - @commercetools-test-data/utils@7.2.6

## 7.2.5

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.5
  - @commercetools-test-data/channel@7.2.5
  - @commercetools-test-data/commons@7.2.5
  - @commercetools-test-data/product@7.2.5
  - @commercetools-test-data/utils@7.2.5

## 7.2.4

### Patch Changes

- Updated dependencies [[`7a5d138`](https://github.com/commercetools/test-data/commit/7a5d1384b7f141919cb36e8ba06e9bc0f2037bd3)]:
  - @commercetools-test-data/commons@7.2.4
  - @commercetools-test-data/channel@7.2.4
  - @commercetools-test-data/product@7.2.4
  - @commercetools-test-data/core@7.2.4
  - @commercetools-test-data/utils@7.2.4

## 7.2.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.3
  - @commercetools-test-data/channel@7.2.3
  - @commercetools-test-data/commons@7.2.3
  - @commercetools-test-data/product@7.2.3
  - @commercetools-test-data/utils@7.2.3

## 7.2.2

### Patch Changes

- Updated dependencies [[`6ec9fac`](https://github.com/commercetools/test-data/commit/6ec9fac121ef2a44dac5aa0bbac6959f4bdd784a)]:
  - @commercetools-test-data/product@7.2.2
  - @commercetools-test-data/core@7.2.2
  - @commercetools-test-data/channel@7.2.2
  - @commercetools-test-data/commons@7.2.2
  - @commercetools-test-data/utils@7.2.2

## 7.2.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/product@7.2.1
  - @commercetools-test-data/core@7.2.1
  - @commercetools-test-data/channel@7.2.1
  - @commercetools-test-data/commons@7.2.1
  - @commercetools-test-data/utils@7.2.1

## 7.2.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@7.2.0
  - @commercetools-test-data/channel@7.2.0
  - @commercetools-test-data/commons@7.2.0
  - @commercetools-test-data/product@7.2.0
  - @commercetools-test-data/utils@7.2.0

## 7.1.1

### Patch Changes

- Updated dependencies [[`87b6d4b`](https://github.com/commercetools/test-data/commit/87b6d4bb7444368bbf402ab8dca30ed2b33862ac)]:
  - @commercetools-test-data/product@7.1.1
  - @commercetools-test-data/core@7.1.1
  - @commercetools-test-data/channel@7.1.1
  - @commercetools-test-data/commons@7.1.1
  - @commercetools-test-data/utils@7.1.1

## 7.1.0

### Minor Changes

- [#487](https://github.com/commercetools/test-data/pull/487) [`387e367`](https://github.com/commercetools/test-data/commit/387e367b189bc9f33fe1288392ee6beae7caf96f) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - Add B2B sample data presets

### Patch Changes

- Updated dependencies [[`387e367`](https://github.com/commercetools/test-data/commit/387e367b189bc9f33fe1288392ee6beae7caf96f), [`6da8af0`](https://github.com/commercetools/test-data/commit/6da8af0291c9769f9d2654408e16ddb8cf728217), [`9e7e964`](https://github.com/commercetools/test-data/commit/9e7e964b10c155bc1bbda3a1d291cb14ceac7e16)]:
  - @commercetools-test-data/channel@7.1.0
  - @commercetools-test-data/commons@7.1.0
  - @commercetools-test-data/product@7.1.0
  - @commercetools-test-data/core@7.1.0
  - @commercetools-test-data/utils@7.1.0

## 7.0.0

### Major Changes

- [#478](https://github.com/commercetools/test-data/pull/478) [`71eb4f5`](https://github.com/commercetools/test-data/commit/71eb4f5c020f86cee129ed477ad6386f15049fdf) Thanks [@jaikamat](https://github.com/jaikamat)! - This breaking release excludes \_\_typename from built GraphQL draft models.

  Updating this package will require changes in your codebase. To migrate:

  - Ensure tests that assert on the presence of \_\_typename in draft GraphQL models are updated to no longer expect this field.
  - Update any code that relies on the presence of \_\_typename in draft GraphQL models to align with the new approach.

### Patch Changes

- Updated dependencies [[`f027639`](https://github.com/commercetools/test-data/commit/f027639045374709b64259584986ea4ae9e1be5b), [`d7b7eb6`](https://github.com/commercetools/test-data/commit/d7b7eb6e2bf3daff60ea60d07d48252252999923), [`71eb4f5`](https://github.com/commercetools/test-data/commit/71eb4f5c020f86cee129ed477ad6386f15049fdf)]:
  - @commercetools-test-data/commons@7.0.0
  - @commercetools-test-data/channel@7.0.0
  - @commercetools-test-data/product@7.0.0
  - @commercetools-test-data/core@7.0.0
  - @commercetools-test-data/utils@7.0.0

## 6.11.0

### Patch Changes

- Updated dependencies [[`8263449`](https://github.com/commercetools/test-data/commit/8263449d57ded8a7cf06172e85b68607c6edc31b)]:
  - @commercetools-test-data/product@6.11.0
  - @commercetools-test-data/core@6.11.0
  - @commercetools-test-data/channel@6.11.0
  - @commercetools-test-data/commons@6.11.0
  - @commercetools-test-data/utils@6.11.0

## 6.10.0

### Minor Changes

- [#452](https://github.com/commercetools/test-data/pull/452) [`3240130`](https://github.com/commercetools/test-data/commit/3240130bea9a13c419c66128eb64117b8b19cfc0) Thanks [@Sarah4VT](https://github.com/Sarah4VT)! - Add presets to several entities for use by audit log

### Patch Changes

- Updated dependencies [[`203eff0`](https://github.com/commercetools/test-data/commit/203eff051df03eff3b4f125e281890d0c2db9fd7)]:
  - @commercetools-test-data/commons@6.10.0
  - @commercetools-test-data/channel@6.10.0
  - @commercetools-test-data/product@6.10.0
  - @commercetools-test-data/core@6.10.0
  - @commercetools-test-data/utils@6.10.0

## 6.9.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.9.0
  - @commercetools-test-data/channel@6.9.0
  - @commercetools-test-data/commons@6.9.0
  - @commercetools-test-data/product@6.9.0
  - @commercetools-test-data/utils@6.9.0

## 6.8.1

### Patch Changes

- [#446](https://github.com/commercetools/test-data/pull/446) [`417bed5`](https://github.com/commercetools/test-data/commit/417bed55ae5ca2e2e73bf8c3cdfb6e7793098d44) Thanks [@Sarah4VT](https://github.com/Sarah4VT)! - Change data generation for inventory-entry and discount-code to prevent potential data overlap which causes flaky e2e results

- Updated dependencies []:
  - @commercetools-test-data/core@6.8.1
  - @commercetools-test-data/channel@6.8.1
  - @commercetools-test-data/commons@6.8.1
  - @commercetools-test-data/product@6.8.1
  - @commercetools-test-data/utils@6.8.1

## 6.8.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.8.0
  - @commercetools-test-data/channel@6.8.0
  - @commercetools-test-data/commons@6.8.0
  - @commercetools-test-data/product@6.8.0
  - @commercetools-test-data/utils@6.8.0

## 6.6.0

### Patch Changes

- Updated dependencies [[`c1d67887`](https://github.com/commercetools/test-data/commit/c1d678873faeb4de4f995fb705b67b5633748562)]:
  - @commercetools-test-data/commons@6.6.0
  - @commercetools-test-data/channel@6.6.0
  - @commercetools-test-data/product@6.6.0
  - @commercetools-test-data/core@6.6.0
  - @commercetools-test-data/utils@6.6.0

## 6.5.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/product@6.5.0
  - @commercetools-test-data/core@6.5.0
  - @commercetools-test-data/channel@6.5.0
  - @commercetools-test-data/commons@6.5.0
  - @commercetools-test-data/utils@6.5.0

## 6.4.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.4.2
  - @commercetools-test-data/channel@6.4.2
  - @commercetools-test-data/commons@6.4.2
  - @commercetools-test-data/product@6.4.2
  - @commercetools-test-data/utils@6.4.2

## 6.4.1

### Patch Changes

- Updated dependencies [[`5271c549`](https://github.com/commercetools/test-data/commit/5271c5499cc861a9cb66b8ad2cb026ebd391183c)]:
  - @commercetools-test-data/product@6.4.1
  - @commercetools-test-data/core@6.4.1
  - @commercetools-test-data/channel@6.4.1
  - @commercetools-test-data/commons@6.4.1
  - @commercetools-test-data/utils@6.4.1

## 6.4.0

### Patch Changes

- Updated dependencies [[`677867c8`](https://github.com/commercetools/test-data/commit/677867c829ba60bd4c819ad544cc841f7b6d3ece)]:
  - @commercetools-test-data/commons@6.4.0
  - @commercetools-test-data/channel@6.4.0
  - @commercetools-test-data/product@6.4.0
  - @commercetools-test-data/core@6.4.0
  - @commercetools-test-data/utils@6.4.0

## 6.3.8

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.8
  - @commercetools-test-data/channel@6.3.8
  - @commercetools-test-data/commons@6.3.8
  - @commercetools-test-data/product@6.3.8
  - @commercetools-test-data/utils@6.3.8

## 6.3.7

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.7
  - @commercetools-test-data/channel@6.3.7
  - @commercetools-test-data/commons@6.3.7
  - @commercetools-test-data/product@6.3.7
  - @commercetools-test-data/utils@6.3.7

## 6.3.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.6
  - @commercetools-test-data/channel@6.3.6
  - @commercetools-test-data/commons@6.3.6
  - @commercetools-test-data/product@6.3.6
  - @commercetools-test-data/utils@6.3.6

## 6.3.5

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.5
  - @commercetools-test-data/channel@6.3.5
  - @commercetools-test-data/commons@6.3.5
  - @commercetools-test-data/product@6.3.5
  - @commercetools-test-data/utils@6.3.5

## 6.3.4

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.4
  - @commercetools-test-data/channel@6.3.4
  - @commercetools-test-data/commons@6.3.4
  - @commercetools-test-data/product@6.3.4
  - @commercetools-test-data/utils@6.3.4

## 6.3.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.3.3
  - @commercetools-test-data/channel@6.3.3
  - @commercetools-test-data/commons@6.3.3
  - @commercetools-test-data/product@6.3.3
  - @commercetools-test-data/utils@6.3.3

## 6.3.2

### Patch Changes

- Updated dependencies [[`e5ecb9dc`](https://github.com/commercetools/test-data/commit/e5ecb9dc0e2a45c192251f3bd9b18226ee54551f)]:
  - @commercetools-test-data/commons@6.3.2
  - @commercetools-test-data/channel@6.3.2
  - @commercetools-test-data/product@6.3.2
  - @commercetools-test-data/core@6.3.2
  - @commercetools-test-data/utils@6.3.2

## 6.3.1

### Patch Changes

- Updated dependencies [[`c6430348`](https://github.com/commercetools/test-data/commit/c6430348fb28320aef1dbfd38a902050565059ce), [`2ed11609`](https://github.com/commercetools/test-data/commit/2ed1160924c51a6316a14788763e323088926afe)]:
  - @commercetools-test-data/product@6.3.1
  - @commercetools-test-data/core@6.3.1
  - @commercetools-test-data/channel@6.3.1
  - @commercetools-test-data/commons@6.3.1
  - @commercetools-test-data/utils@6.3.1

## 6.3.0

### Minor Changes

- [#382](https://github.com/commercetools/test-data/pull/382) [`d4faaa2a`](https://github.com/commercetools/test-data/commit/d4faaa2a5c8559ad4b29fc324c6d6f2c7debe1eb) Thanks [@renovate](https://github.com/apps/renovate)! - Updated packages to use dependency `@commercetools/platform-sdk": "^6.0.0`

### Patch Changes

- [#393](https://github.com/commercetools/test-data/pull/393) [`e7dfb765`](https://github.com/commercetools/test-data/commit/e7dfb7650fb45ff1ef61f2a6e54a62af6accd714) Thanks [@valoriecarli](https://github.com/valoriecarli)! - Added InventoryEntry & InventoryEntryDraft to index

- Updated dependencies [[`d4faaa2a`](https://github.com/commercetools/test-data/commit/d4faaa2a5c8559ad4b29fc324c6d6f2c7debe1eb), [`6c2aa18f`](https://github.com/commercetools/test-data/commit/6c2aa18f86947855e2d23b43cdacec6c431a6ace)]:
  - @commercetools-test-data/channel@6.3.0
  - @commercetools-test-data/commons@6.3.0
  - @commercetools-test-data/product@6.3.0
  - @commercetools-test-data/core@6.3.0
  - @commercetools-test-data/utils@6.3.0

## 6.2.0

### Minor Changes

- [#387](https://github.com/commercetools/test-data/pull/387) [`dd016d7a`](https://github.com/commercetools/test-data/commit/dd016d7a3255ee40d2fe7947fdc6b5aed2cd7ec5) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Add InventoryEntry presets for GoodStore sample data.

### Patch Changes

- Updated dependencies [[`dd016d7a`](https://github.com/commercetools/test-data/commit/dd016d7a3255ee40d2fe7947fdc6b5aed2cd7ec5)]:
  - @commercetools-test-data/product@6.2.0
  - @commercetools-test-data/core@6.2.0
  - @commercetools-test-data/channel@6.2.0
  - @commercetools-test-data/commons@6.2.0
  - @commercetools-test-data/utils@6.2.0

## 6.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.1.1
  - @commercetools-test-data/channel@6.1.1
  - @commercetools-test-data/commons@6.1.1
  - @commercetools-test-data/utils@6.1.1

## 6.1.0

### Patch Changes

- Updated dependencies [[`3cccf1d1`](https://github.com/commercetools/test-data/commit/3cccf1d19057b05cb65c9696465b6dcd5ddafa97), [`90767a10`](https://github.com/commercetools/test-data/commit/90767a10461509632f0d9228407f54605cffdcd9), [`b00d01a5`](https://github.com/commercetools/test-data/commit/b00d01a5aa67265e726e2d739f067ead042d436f)]:
  - @commercetools-test-data/commons@6.1.0
  - @commercetools-test-data/channel@6.1.0
  - @commercetools-test-data/core@6.1.0
  - @commercetools-test-data/utils@6.1.0

## 6.0.0

### Minor Changes

- [#343](https://github.com/commercetools/test-data/pull/343) [`e42f134`](https://github.com/commercetools/test-data/commit/e42f13460acac08208f826766ed8e111cc3a9904) Thanks [@tylermorrisford](https://github.com/tylermorrisford)! - Adds the InventoryEntry and InventoryEntryDraft models.

### Patch Changes

- Updated dependencies []:
  - @commercetools-test-data/core@6.0.0
  - @commercetools-test-data/channel@6.0.0
  - @commercetools-test-data/commons@6.0.0
  - @commercetools-test-data/utils@6.0.0
