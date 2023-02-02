# @commercetools-test-data/money

This package provides the data model for the commercetools platform `Money` type

https://docs.commercetools.com/api/types#money

# Install

```bash
$ yarn add -D @commercetools-test-data/money
```

# Usage

```ts
import type { TMoney } from '@commercetools-test-data/money';
import * as Money from '@commercetools-test-data/money';

const Money = Money.random().build<TMoney>();
```
