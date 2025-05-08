<h2 align="center">commercetools Test Data 🤖</h2>
<p align="center">
  <i>✨ Monorepository with test data models for commercetools platform entities 🛠</i>
</p>
<p align="center">
  <a href="https://github.com/commercetools/test-data/releases"><img src="https://badgen.net/github/release/commercetools/test-data" alt="Latest release" /></a> <a href="https://github.com/commercetools/test-data/blob/master/LICENSE"><img src="https://badgen.net/github/license/commercetools/test-data" alt="GitHub license" /></a>
</p>

This repository contains data models within the commercetools platform ecosystem.

> In time, we will continue to implement and open source test data models. If you are interested or missing a specific data model, feel free to open a feature request or try to contribute to the repository.

Models are defined in the `models/*` workspace and are grouped by domain in different packages.

All models are built using the `core` package, which contains the necessary methods to implement and work with models. The `core` package is very much agnostic of the commercetools platform domain, so you can potentially use it to build your own models for other domains.

To know more about how to work and build data models, take a look at the [models overview](./docs/contributing/test-data-models-overview.md) first and head to the ["Create new model" guideline](./docs/guidelines/creating-new-model.md) as a follow up to learn how to implement a new one.

# Ownership & Gouvernance

## Ownership 

> [!IMPORTANT]  
> This repository is not owned by a single team nor the Frontend Chapter. Each individual aspect of this repository is owned by the respective teams of their respective domains.

## Contributing 

It is _mandatory that before contributing to this repository_ you make sure you have read the [contribution guidelines](https://github.com/commercetools/test-data/blob/main/CONTRIBUTING.md) as well as the documentation about the [test data models overview](https://github.com/commercetools/test-data/blob/main/docs/contributing/test-data-models-overview.md) and [building a new test data model](https://github.com/commercetools/test-data/blob/main/docs/guidelines/creating-new-model.md) if needed. Please also do not get started without understanding the [documentation of the core package](https://github.com/commercetools/test-data/tree/main/core).

Each respective team is responsible for the test data models of their domain in their repository to follow the defined patterns and to use these models in their applications instead of writing custom test data models in a bespoke repository.

## Code review

Pull Request reviews must and is expected to only involve the team owning the respective models by their domain. It can only, on demand and on a voluntary basis, involve other teams or the FE Chapter.

## Release process

Releases of test-data models can be created when needed by merging a respective "Version Packages" Pull Request. Keep in mind that releases should be aggregated whenever possible. As a result before releasing you are expected to:

1. Check open Pull Requests which are pending review and contact creators if they wish to be part of the next release
    - If code review is close to be finished help to ensure it progresses to include the change in your release
    - If code review of Pull Request(s) requires more time inform the owner that the change won't be part of your release
2. Perform the release and ensure it is updated in your repository and working as expected
    - If later the release causes issues in other repositories you are expected to help resolving them

# Usage

Using models is pretty straightforward. You import the package and build the model, which returns the data in the requested shape.

For example, assuming we have an `Author` model from a `stories` package:

```ts
import type { TAuthor } from '@commercetools-test-data/stories';

import { Author } from '@commercetools-test-data/stories';

const author1 = Author.random().firstName('John').buildGraphql<TAuthor>();
const author2 = Author.random().firstName('Rebecca').buildGraphql<TAuthor>();
```

# Local Development with Linked Packages

When developing with multiple repositories, you may need to link packages locally to ensure your application uses the latest local changes without waiting for a package to be published. Below is a general approach to achieve this:

## Steps to Link a Local Package

1. **Clone and Set Up the test-data Repository:**

   - Ensure that the test-data repository you want to link is cloned locally and properly set up.
     ```bash
     cd path-to-test-data-repo
     pnpm install
     ```

2. **Update the Application's `package.json`:**

   - In your application’s `package.json`, replace the dependency version with the relative path to the local package directory. For example:
     ```json
     {
       "dependencies": {
         "@example/package-name": "<path-to-test-data-package>",
         "@commercetools-test-data/commons": "../../../test-data/models/commons"
       }
     }
     ```

3. **Install Dependencies:**

   - Run the following commands to ensure your application is using the local version of the package:
     ```bash
     cd path-to-application-repo
     pnpm install
     ```

4. **Verify the Link:**

   - Ensure that the package is correctly linked by inspecting the `node_modules` directory in your application repository. The package should point to your local build instead of fetching from a remote registry.

5. **Development Workflow:**
   - During development, make changes in the test-data repository, rebuild the package using `pnpm install` in test-data repository, and re-run your application to see the changes reflect immediately.
   - Remember to revert the `package.json` changes before committing or pushing to a remote repository unless those changes are intended to be shared.

## Important Notes

- This approach is ideal for local development and testing. It ensures that your application runs with the latest package changes without the need to publish the package.
- Make sure to revert or manage these changes appropriately when switching between local development and production environments.

# Contribution

## Presets Folder

For organization & ownership purposes, Pangolin & FCT house their presets under their respective folders (e.g. change-history-data, sample-data-fashion, sample-data-b2c-lifestyle). These should not be altered by an external team; however, if modifications occur for any reason, a corresponding team review is mandatory.

## FAQ

#### whose review is mandatory for creating PR?

For pull requests concerning your team's specific presets, only your team's approval is required. If modifications are made to the models, inviting representatives from other teams for review is mandatory.

#### Can I simply copy/paste existing test model from other repository (eg: mc-frontend) to test-data?

Avoid directly copying and pasting from other repository models, as it may complicate cleanup efforts. While specific sections like generator fields and portions of specs may be copied over as is, be mindful that the overall structure and composition may differ significantly from your current setup.

#### Is there a easy way to know which models are already available?

No, there is no overarching inventory page at this time that outlines each package with its corresponding models.
Each package contains the draft & final models that are grouped/organized by their representations as outlined in the docs.
Take cartDiscounts#representations for example. If you’d like to review what has been created to date for underlying representations, you can just drill to the main [index](https://github.com/commercetools/test-data/blob/main/models/cart-discount/src/index.ts) of that package.

#### How do I test a new model (e.g, with my MC component spec) when I create?

Unfortunately, that part does become a bit more complex.
Copy and pasting it into the node_modules folder is one option.
Another trick that we typically do is to add the new models locally in a separate file, make the call to it, then address any tweaks necessary.

#### What is the procedure after merging the PR?

For merged pull requests, there is no set schedule for releasing version packages (VP). To date it has simply depended on the traffic and urgency at that point in time.
If you need a version released quickly, you are more than welcome to ping the #test-data-migration channel to see if there are any objections to doing so.
Once the VP is released, it is immediately accessible. You have the option to either wait for dependency updates to process (e.g [update all test-data packages to v6.10.0](https://github.com/commercetools/merchant-center-frontend/pull/16069)), or updating them manually.
