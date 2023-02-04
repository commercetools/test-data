# @commercetools-test-data/image

This package provides the data model for the commercetools platform `Image` type

https://docs.commercetools.com/api/projects/products#image

# Install

```bash
$ yarn add -D @commercetools-test-data/image
```

# Usage

```ts
import type { TImage } from '@commercetools-test-data/image';
import * as Image from '@commercetools-test-data/image';

const image = Image.random().build<TImage>();
```
