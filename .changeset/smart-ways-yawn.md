---
"@commercetools-test-data/core": patch
---

Add support for a `typename` property when building a GraphQL list

```js
const list = buildGraphqlList([builder, builder], {
  total: 10,
  offset: 2,
  typename: 'OrganizationPaginatedResultList',
});
```

Please note that whenever a `name` is specified the old behaviour of concatinating the `name` with `QueryResult` will remain. If that behaviour is not adequate for your use case feel free to use `typename`.
