# `@commercetools-test-data/core`

This package provides the core functions to define the data models.

## Install

```bash
$ yarn add -D @commercetools-test-data/core
```

## Creating a new data model

Models are treated packages. Each model will be published as a standalone NPM package.

To create a new model, add a new package in the `models` workspace with the following structure:

```
models/<package_name>
├── LICENSE
├── README.md
├── index.ts
├── package.json
├── src
│   ├── builder.ts
│   ├── generator.ts
│   ├── index.ts
│   ├── presets
│   │   └── index.ts
│   ├── transformers.ts
│   └── types.ts
├── tsconfig.declarations.json
└── tsconfig.json
```

To define and build new models, you need to use the core package `@commercetools-test-data/core`.

### Builder

A builder is the result of the data model. Builders allow compositions with other models and to transform the data into different shapes, for example `rest` or `graphql`.

When you want to get the generated data, you would **build** the model (builder).

Builders are essentially composed by a generator and (optionally) transformers.

### Generator

A generator is what describes the initial model shape and data. Most of the fields can and should be initialized with some values. You can define random values using `fake` or static values.

```ts
import { Generator, fake } from '@commercetools-test-data/core';

const generator = Generator<TAuthor>({
  name: 'Author',
  fields: {
    firstName: fake((f) => f.name.firstName()),
    locale: 'en',
  },
});

> The shape of the generator model is what usually is used in the UI and does not need transformation.

Models can have nested fields, like object or arrays. Most of the time those are also defined as models.
In this case, the generator can define the value of the nested field as `null`. Those nested models are then built in the builder and or the transformers.

For example, the author model can have a list of books:

```ts
const generator = Generator<TAuthor>({
  name: 'Author',
  fields: {
    firstName: fake((f) => f.name.firstName()),
    locale: 'en',
    books: null,
  },
});
```

Books are defined as another model:

```ts
const generator = Generator<TBook>({
  name: 'Book',
  fields: {
    title: fake((f) => f.random.words()),
  },
});
```

When defining the builder for the `Author`, we can then initialize the `books` field by referencing the `Book` model.

```ts
const Author = Builder<TAuthor>({
  generator,
  transformers,
}).books([Book.random()]);
```

At the same time, we also need to tell the transformers that the `books` field can be built. We do that by specifying the field in the `buildFields` option:

```ts
const transformers = {
  default: Transformer<TAuthor, TAuthor>('default', {
    buildFields: ['books'],
  }),
  graphql: Transformer<TAuthor, TAuthorGraphql>('graphql', {
    buildFields: ['books'],
    addFields: () => ({
      __typename: 'Author',
    }),
  }),
};
```

### Transformers

A transformer is used to transform the data defined in the generator (the initial model) to another shape.

There are 3 available transformer types:

- `default`: this is the "identity" transformer. You would use the `build()` method to get the generated data according to the initial shape.
- `graphql`: this is the transformer for GraphQL data shapes. You would use the `buildGraphql()` method to get the generated data transformed into a GraphQL shape.
- `rest`: this is the transformer for REST data shapes. You would use the `buildRest()` method to get the generated data transformed into a REST shape.

Defining a `graphql` and/or a `rest` transformer is optional and depends on what the specific data requirements are.

For example, for the `Author` we can define a `graphql` transformer like this:

```ts
const transformers = {
  default: Transformer<TAuthor, TAuthor>('default', {
    buildFields: ['books'],
  }),
  graphql: Transformer<TAuthor, TAuthorGraphql>('graphql', {
    buildFields: ['books'],
    addFields: () => ({
      __typename: 'Author',
    }),
  }),
};
```

Then calling `Author.random().buildGraphql<TAuthorGraphql>()` will generate the data with the `__typename` field.

A transformer can be configured with different options:

- `buildFields`: a list of fields that are defined as other data models. This is necessary so that transformers of these nested models are also executed.
- `removeFields`: a list of fields that should be removed from the model.
- `addFields`: a function that should return an object with new fields that needs to be added to the model. The object is then merged with the initial data.
  The function gets an object argument with the initial `fields` object, in case it's needed to construct the new object.
- `replaceFields`: a function that should return the fully transformed value. This is useful for example when transforming data into different data types, for example an object into an array of objects.
  The function gets an object argument with the initial `fields` object, in case it's needed to construct the value.

> The `replaceFields` option is mutually exclusive in regards to the `addFields` and `removeFields` options.

### Presets

Presets are pre-configured models (builders) that can be defined for specific use cases.

### Types

The `types.ts` file contains the TypeScript representations of the models and transformed models.
