---
'@commercetools-test-data/product': patch
---

Fixed the return type for some properties in the GraphQL representation:

- name
- description
- slug
- metaTitle
- metaKeywords
- metaDescription

They all were returning a value with type `TLocalizedStringGraphql` where they should be returning a `string`.

From the consumer point of view, mocking those values won't change so they can still use the `LocalizedString` common model to set it up:

```js
Product.random()
  .name(LocalizedString.random().en('Shoes').de('Schuhe'))
  .buildGraphql();
```

The actual `string` returned will be the one with the default locale (`en`) or the first one if that one does not exist.
