# @commercetools-test-data/cent-precision-money

This package provides the data model for the commercetools platform `CentPrecisionMoney` type

https://docs.commercetools.com/api/types#centprecisionmoney

# Install

```bash
$ yarn add -D @commercetools-test-data/cent-precision-money
```

# Usage

```ts
import type {
  TCentPrecisionMoney,
} from '@commercetools-test-data/cent-precision-money';
import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';

const centPrecisionMoney = CentPrecisionMoney.random().build<TCentPrecisionMoney>();
```
