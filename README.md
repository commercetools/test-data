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

To know more about how to work and build data models, [check out the documentation of the `core` package](./core).

# Usage

Using models is pretty straightforward. You import the package and build the model, which returns the data in the requested shape.

For example, assuming we have an `Author` model from a `stories` package:

```ts
import type { TAuthor } from '@commercetools-test-data/stories';

import { Author } from '@commercetools-test-data/stories';

const author1 = Author.random().firstName('John').buildGraphql<TAuthor>();
const author2 = Author.random().firstName('Rebecca').buildGraphql<TAuthor>();
```

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
