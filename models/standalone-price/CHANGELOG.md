# @commercetools-test-data/standalone-price

## 7.0.0

### Major Changes

- [#478](https://github.com/commercetools/test-data/pull/478) [`71eb4f5`](https://github.com/commercetools/test-data/commit/71eb4f5c020f86cee129ed477ad6386f15049fdf) Thanks [@jaikamat](https://github.com/jaikamat)! - This breaking release excludes \_\_typename from built GraphQL draft models.

  Updating this package will require changes in your codebase. To migrate:

  - Ensure tests that assert on the presence of \_\_typename in draft GraphQL models are updated to no longer expect this field.
  - Update any code that relies on the presence of \_\_typename in draft GraphQL models to align with the new approach.

### Minor Changes

- [#472](https://github.com/commercetools/test-data/pull/472) [`f027639`](https://github.com/commercetools/test-data/commit/f027639045374709b64259584986ea4ae9e1be5b) Thanks [@jaikamat](https://github.com/jaikamat)! - Create standalone prices model and associated draft, support channel key reference preset

### Patch Changes

- [#479](https://github.com/commercetools/test-data/pull/479) [`e76ae3a`](https://github.com/commercetools/test-data/commit/e76ae3a1d164ba61124361c3768e030d869ec2de) Thanks [@jaikamat](https://github.com/jaikamat)! - Fix StandalonePriceDraft GraphQL shape

- Updated dependencies [[`f027639`](https://github.com/commercetools/test-data/commit/f027639045374709b64259584986ea4ae9e1be5b), [`d7b7eb6`](https://github.com/commercetools/test-data/commit/d7b7eb6e2bf3daff60ea60d07d48252252999923), [`71eb4f5`](https://github.com/commercetools/test-data/commit/71eb4f5c020f86cee129ed477ad6386f15049fdf)]:
  - @commercetools-test-data/commons@7.0.0
  - @commercetools-test-data/channel@7.0.0
  - @commercetools-test-data/customer-group@7.0.0
  - @commercetools-test-data/core@7.0.0
  - @commercetools-test-data/utils@7.0.0
