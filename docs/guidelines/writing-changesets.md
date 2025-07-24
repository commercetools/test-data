# Writing changesets

In this repository we use the [changesets](https://github.com/changesets/changesets) package to manage releases.
Using this tool helps with the process of keeping track of which changes will be included in each new release and what version type we should use (_major_, _minor_ or _patch_).

It relies on the existance of changeset files which describe the changes we make in the repository.

Every PR we create to update or add something to the chapter (unless for internal purposes) should include a file describing what has been modified.

We should be using this command to generate such a file:

```
pnpm changeset
```

That command will guide you with some questions to provide the necessary information.

When actually writing the contents of the change description, please think about the consumers of this library. We need to provide clear information. This informs them what has changed and most importantly, if they need to make a change on their end now or later.

## Guidelines

The idea is that we provide reader with the relevant information about what has been changed.

The key items could be:

1. What have changed (addition, refactoring, fixing)
2. Where the change happened (which model or models)
3. When adding something, provide a code snippet showcasing how it should be used

## Examples

Here we list some example for some common use cases.

### If your adding a new test data model

#### Basic use case:

---

We're introducing a new test data model named `CartDiscountTarget` which can be consumed from the `@commercetools/composable-commerce-test-data/cart-discount` entry point.

This is how it can be used:

```ts
import {
  CartDiscountTargetGraphql,
  CartDiscountTargetRest,
} from '@commercetools/composable-commerce-test-data/cart-discount';

const graphqlModel = CartDiscountTargetGraphql.random()
  .type(CartDiscountTargetGraphql.constants.targetTypes.lineItems)
  .build();

const restModel = CartDiscountTargetRest.random()
  .type(CartDiscountTargetGraphql.constants.targetTypes.shipping)
  .build();
```

#### In case the new model is only available in the GraphQL type:

---

We're introducing a new model named `OrdersListListView` can be consumed from the `@commercetools/composable-commerce-test-data/my-view` entry point.

There's only a GraphQL version for this model as it only exists in the MC Settings services which only expose a GraphQL API.

This is how the new model could be used:

```ts
import { OrdersListViewGraphql } from '@commercetools/composable-commerce-test-data/my-view';

const ordersListView = OrdersListViewGraphql.random().build();
```

### If you are migrating an existing model

---

We've migrated the `TaxRate` model to the new implementation patterns.

This change does not have any impact on consumers, however the `TaxRate` model is now deprecated and you're expected to start using the `TaxRateGraphql` or `TaxRateRest` models instead depending of the type of API you're mocking.

```ts
import { TaxRateGraphql, TaxRateRest } form '@commercetools/composable-commerce-test-data/tax-cateopry';

const graphqlTaxRate = TaxRateGraphql.random().build();
const restTaxRate = TaxRateRest.random().build();
```

### If you are adding a new preset to a model

---

We're introducing a new preset to the `LiteItem` test data model named `withAllFields`.

This is how you could use it:

```ts
import { LineItemGraphql } from '@commercetools/composable-commerce-test-data/cart';

const ordersListView = LineItemGraphql.presets.withAllFields();
```
