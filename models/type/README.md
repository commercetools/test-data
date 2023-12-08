# @commercetools-test-data/type

This package provides data models for the commercetools platform `Type` representations.

https://docs.commercetools.com/api/projects/types#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/type
```

# Usage

```ts
import {
  Type,
  TypeDraft,
  type TType,
  type TypeDraft,
} from '@commercetools-test-data/type';

const type = Type.random().build<TType>();
const TypeDraft = TypeDraft.random().build<TTypeDraft>();
```
