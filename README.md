<h2 align="center">commercetools Test Data 🤖</h2>
<p align="center">
  <i>✨ Monorepository with test data models for commercetools platform entities 🛠</i>
</p>
<p align="center">
  <a href="https://github.com/commercetools/test-data/releases"><img src="https://badgen.net/github/release/commercetools/test-data" alt="Latest release" /></a> <a href="https://github.com/commercetools/test-data/blob/master/LICENSE"><img src="https://badgen.net/github/license/commercetools/test-data" alt="GitHub license" /></a>
</p>

This repository contains data models within the commercetools platform ecosystem.

> In time, we will continue to implement and open source test data models. If you are interested or missing a specific data model, feel free to open a feature request or try to contribute to the repository.

Each model is published as a standalone NPM package. Models are defined in the `models/*` workspace.

All models are built using the `core` package, which contains the necessary methods to implement and work with models. The `core` package is very much agnostic of the commercetools platform domain, so you can potentially use it to build your own models for other domains.

To know more about how to work and build data models, [check out the documentation of the `core` package](./core).

# Usage

Using models is pretty straightforward. You import the package and build the model, which returns the data in the requested shape.

For example, assuming we have an `Author` model:

```ts
import * as Author from '@commercetools-test-data/author';

const author1 = Author.random().firstName('John').buildGraphql();
const author2 = Author.random().firstName('Rebecca').buildGraphql();
```
