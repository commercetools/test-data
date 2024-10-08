# Contributing

Please _read_ before contributing to Test Data in order to get familiar with the guidelines for contributing to the project.

## Core Ideas

Writing tests often times requires to provide meaningful test data. But how can we do that consistently and how can we share this?

We want to provide a shared implementation to define test data across applications that adheres to the following patterns:

- Test data generation should not be provided inline in each test, but be defined in a central and reusable place.
- Test data should be randomly generated but still be as representative of real production data as possible
- Test data generation should be customizable for different scenarios and not altered in the tests themselves.

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are fantastic help. They should remain focused in scope and avoid containing unrelated commits.

If possible, please try to provide a related issue first, where the topic is discussed and agreed upon before starting to work on that. This is helpful for both you and the maintainers to be familiar with the changes beforehand.

## Folder Structure

Models are defined in the `models/*` workspace and are grouped by domain in different packages.

All models are built using the `core` package, which contains the necessary methods to implement and work with models. The `core` package is very much agnostic of the commercetools platform domain, so you can potentially use it to build your own models for other domains.
To know more about how to work and build data models, [check out the documentation of the core package](./core).

## Setting up a local copy

1. Clone the repository
2. Make sure you have [pnpm](https://pnpm.io/installation) installed. We recommend [using Corepack](https://pnpm.io/installation#using-corepack).
3. Run `pnpm install` in the root folder

Once it's done, you can run `pnpm test` to test your changes.

## Building a new test data model

Please refer to [this documentation](docs/guidelines/creating-new-model.md) to get detailed information.

## Adding changesets

commercetools test-data uses [changesets](https://github.com/atlassian/changesets) to do versioning and creating changelogs.

As a contributor you need to add a changeset by running `pnpm changeset`.
The command will prompt to select the packages that should be bumped, their associated semver bump types and some markdown which will be inserted into the changelogs.

When opening a Pull Request, a `changeset-bot` checks that the Pull Request contains a changeset. A changeset is **not required**, as things like documentation or other changes in the repository itself generally don't need a changeset.

## Releasing packages

commercetools test-data uses [changesets](https://github.com/atlassian/changesets) to do versioning and publishing a release.

A [Changesets release GitHub Action](https://github.com/changesets/action) opens a `Version Packages` Pull Request whenever there are some changesets that have not been released yet.

When the `Version Packages` Pull Request gets merged, the Changesets release GitHub Action will automatically trigger the release.

## Canary releases

On `main` branch, we automatically publish **canary** releases from CI to the `canary` distribution channel, _after_ the build runs successfully.

Canary releases are useful to test early changes that should not be released yet to `next` or `latest`. They are automatically triggered and released after a Pull Request merged into `main`, unless the commit message contains `[skip publish]`.

Note that canary releases **will not create git tags and version bump commits**.
