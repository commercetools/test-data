# @commercetools-test-data/custom-object

This package provides the data model for the commercetools platform `CustomObject` representations

https://docs.commercetools.com/api/projects/custom-objects#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/custom-object
```

# Usage

```ts
import {
  CustomObject,
  CustomObjectDraft,
  type TCustomObject,
  type TCustomObjectDraft,
} from '@commercetools-test-data/custom-object';

const customObject = CustomObject.random().build<TCustomObject>();
const customObjectDraft =
  CustomObjectDraft.random().build<TCustomObjectDraft>();
```
