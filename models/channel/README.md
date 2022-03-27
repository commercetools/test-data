# `@commercetools-test-data/category`

This package provides the data model for the commercetools platform `Category` type

https://docs.commercetools.com/api/projects/categories

## Install

```bash
$ yarn add -D @commercetools-test-data/category
```

## Usage

```tsx
import Category from '@commercetools-test-data/category';
const category = Category.random().build();
console.log(category);
// {
//   "id": <UUID>,
//   "version": 1,
//   "createdAt": "2018-12-19T21:31:56.346Z",
//   "lastModifiedAt": "2019-09-24T10:04:20.946Z",
//   "name": {
//     "en": "Clothes"
//   },
//   "slug": {
//     "en": "clothes"
//   },
//   "ancestors": [],
//   "orderHint": "0.01",
//   "assets": []
// }
```
