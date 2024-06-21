# @commercetools-test-data/discounts-custom-view

This package provides the data model for the commercetools platform `DiscountsCustomView` and `DiscountsCustomViewInput` type

# Install

```bash
$ pnpm add -D @commercetools-test-data/discounts-custom-view
```

# Usage

```ts
import type {
  DiscountsCustomView,
  DiscountsCustomViewInput,
  type TDiscountsCustomView,
  type TDiscountsCustomViewInput,
} from '@commercetools-test-data/discounts-custom-view';

const discountsCustomView =
  DiscountsCustomView.random().build<TDiscountsCustomView>();
const discountsCustomViewInput =
  DiscountsCustomViewInput.random().build<TDiscountsCustomViewInput>();
```
