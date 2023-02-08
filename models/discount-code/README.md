# @commercetools-test-data/discount-code

This package provides the data model for the commercetools platform `DiscountCode` type

https://docs.commercetools.com/api/projects/discountCodes#discountcode

# Install

```bash
$ yarn add -D @commercetools-test-data/discount-code
```

# Usage

```ts
import type {
  TDiscountCode,
  TDiscountCodeDraft,
} from '@commercetools-test-data/discount-code';
import * as DiscountCode from '@commercetools-test-data/discount-code';

const discountCode =
  DiscountCode.random().build<TDiscountCode>();
const discountCodeDraft =
  DiscountCode.DiscountCodeDraft.random().build<TDiscountCodeDraft>();
```
