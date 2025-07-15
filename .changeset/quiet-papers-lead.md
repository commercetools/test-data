---
'@commercetools/composable-commerce-test-data': minor
---

We're introducing two new helper functions which helps generating GraphQL lists:

- `buildLimitGraphqlList`
- `buildCountGraphqlList`

both in the `@commercetools/composable-commerce-test-data/core` entry point.

When looking through the generated GraphQL types we've found we have two types of lists results:

```ts
// Limit based
export type TCtpInterfaceInteractionsRawResult = {
  __typename?: 'InterfaceInteractionsRawResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<TCtpInterfaceInteractionsRaw>;
  total: Scalars['Int']['output'];
};

// Count based
export type TCtpInventoryEntryQueryResult = {
  __typename?: 'InventoryEntryQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpInventoryEntry>;
  total: Scalars['Long']['output'];
};
```

With these new two helpers, consumers have a more ergonomic way of building this type of results lists.

Here's an example for a limit-based result list:

```ts
import { buildLimitGraphqlList } from '@/core';
import {
  AttributeDefinitionGraphql,
  type TAttributeDefinitionGraphql,
} from '@commercetools/composable-commerce-test-data/product-type';

const attributeDefinitionsResultGraphql = buildLimitGraphqlList<
  TAttributeDefinitionGraphql,
  'AttributeDefinitionResult'
>(
  [
    AttributeDefinitionGraphql.presets.countryOfOrigin(),
    AttributeDefinitionGraphql.presets.size(),
  ],
  {
    __typename: 'AttributeDefinitionResult',
  }
);
```

Here's an example for a count-based result list:

```ts
import { buildCountGraphqlList } from '@/core';
import {
  InventoryEntryGraphql,
  type TInventoryEntryGraphql,
} from '@commercetools/composable-commerce-test-data/inventory-entry';

const inventoryEntriesResultGraphql = buildCountGraphqlList<
  TAttributeDefinitionGraphql,
  'InventoryEntryQueryResult'
>(
  [
    InventoryEntryGraphql.random(),
    InventoryEntryGraphql.random(),
    InventoryEntryGraphql.random(),
  ],
  {
    __typename: 'InventoryEntryQueryResult',
  }
);
```
