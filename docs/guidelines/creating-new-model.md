# Building a new test data model

> [!IMPORTANT]
> This document builds on top of the [Test Data Models overview](../contributing/test-data-models-overview.md) one so it would be useful if you read it first.

In this document we explain the steps needed to build a new test data model.

## Context

First of all, remember that a test data model is a set of objects that allow consumers to create objects that mimic commercetools APIs responses which help during testing implementation.

Also, since our public services APIs expose our entities in both REST and GraphQL representations, we need to first get familiar with the one we're going to build the test data model for.

A good place to start is the [HTTP API](https://docs.commercetools.com/api/) documentation site where we can learn about the entities and their shapes ([here](https://docs.commercetools.com/api/projects/products#product)'s an example for the `Product` entity).

For the GraphQL representations, we recommend using the `GraphQL Explorer` application in the Merchant Center as you can browse all the queries, mutations and types.

## Defining the types

You can start with the `types` file when building a new test data model where we need to define the shape of the data model's representations.

Here's an example of such a file:

```ts
import type { Channel, ChannelDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpChannel,
  TCtpChannelDraft,
} from '@commercetools-test-data/graphql-types';

export type TChannelRest = Channel;
export type TChannelGraphql = TCtpChannel;

export type TChannelDraftRest = ChannelDraft;
export type TChannelDraftGraphql = TCtpChannelDraft;

export type TCreateChannelBuilder<
  TChannelModel extends
    | TChannelRest
    | TChannelGraphql
    | TChannelDraftRest
    | TChannelDraftGraphql,
> = () => TBuilder<TChannelModel>;
```

As you can see, we have four main types: two for the full entity (`TChannelRest` and `TChannelGraphql`) and another pair for the draft version (`TChannelDraftRest` and `TChannelDraftGraphql`).

The REST representations are just using the `@commercetools/platform-sdk` package.
This is a package which is auto-generated with the latest versions of the commercetools REST APIs and already contains all the Typescript interfaces describing the models.

For GraphQL, we use the `@commercetools-test-data/graphql-types` package.
This is an internal package of this repository and it exposes the types for the different services we might want to use models from: `core` (organization related), `ctp` (project related), `mc` (MC Gateway) and `settings` (MC Settings).
You might want to run the `generate-types` NPM script to make sure the package types are updated.

### Handling references

Something relevant to keep in mind is that reference properties are handled differently between the REST and GraphQL APIs.

References are the way our APIs can link entities with each other but the design is a little different.

In the REST APIs, whenever we want to link entities chances are we don't want to bring the linked entity when we load the main entity we want to use. For this reason, referenced entity objects looks like this:

```ts
export interface StoreReference {
  readonly typeId: 'store';
  readonly id: string;
  readonly obj?: Store;
}

// Usage example
interface Cart extends BaseResource {
  readonly id: string;
  ...
  readonly store?: StoreReference;
}
```

As you can see, the object by default only loads the ID of the referenced entity but it also has an `obj` optional property with the actual linked entity object you can optionally load (through endpoint parameters).

Since GraphQL implements a query language where consumers can define what they want to consume, the way those types are defined is different.
In this context, what was decided is to actually have the property defined as the linked entity but also have a reference property similar:

```ts
type TCtpReference = {
  __typename?: 'KeyReference';
  key: TCtpScalars['String']['output'];
  typeId: TCtpScalars['String']['output'];
};

// Usage example
type TCtpCart = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Cart';
    id: TCtpScalars['String']['output'];
    ...
    store?: TCtpMaybe<TCtpStore>;
    storeRef?: TCtpMaybe<TCtpReference>;
  };
```

You need to bear this in mind when configuring the REST and GraphQL fields of a test data model since the value you will use for populating the referenced entity property will be different among REST and GraphQL specific configuration (and the latter has one extra property compared with the former).

Here is an example:

```ts
export const restFieldsConfig: TModelFieldsConfig<TCartRest> = {
  fields: {
    ...commonFieldsConfig,
    store: fake(() => Reference.presets.storeReference()),
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TCartGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'InventoryEntry',
    store: fake(() => StoreGraphql.random()),
    storeRef: fake((f) => Reference.presets.storeReference()),
  },
  postBuild: (model) => {
    const storeRef = model.store
      ? Reference.presets
          .channelReference()
          .id(model.store.id)
          .buildGraphql<TReferenceGraphql<'store'>>()
      : null;
    return {
      ...model,
      storeRef,
    };
  },
};
```

## Configuring fields

The next step can involve creating the `fields-config` file where we need to implement the population of the default values we want the test data model to have.

Since we have two representations for it (REST and GraphQL), we need to export two objects.

When deciding which model's fields to populate, the rule of thumb is **to only assign values to required properties**.
If you expect consumers to need a fully populated version of the model, just create a preset called `withAllFields` for this use case.

Here's an example:

```ts
import {
  Address,
  ClientLogging,
  LocalizedString,
} from '@commercetools-test-data/commons';
import {
  fake,
  sequence,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { roles } from './constants';
import type { TChannelGraphql, TChannelRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  key: fake((f) => f.lorem.slug(2)),
  roles: [roles.Primary],
  name: null,
  description: null,
  address: fake(() => Address.random()),
  reviewRatingStatistics: null,
  custom: null,
};
export const restFieldsConfig: TModelFieldsConfig<TChannelRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TChannelGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Channel',
    nameAllLocales: null,
    descriptionAllLocales: null,
  },
  postBuild: (model) => {
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : undefined;
    const description = model.descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.descriptionAllLocales
        )
      : undefined;
    return {
      ...model,
      name,
      description,
    };
  },
};
```

Probably you have spotted the `postBuild` property in the GraphQL config object.

This is optional and we should only use it if there are any dependencies among the data model fields.
In this case, `name` and `description` depend on the values from `nameAllLocales` and `descriptionAllLocales`. We don't know the value in advance, but will only once the data model has been built. The `postBuild` callback allows us to manipulate the built object before it's returned to the consumer.

## Testing

You are expected to implement tests for the builders (REST and GraphQL) that cover the generation of the default version of the data model.
If you have created any preset, please also make sure to write a test file for it validating the properties that the preset populates.

### Validating nested models

If your model has nested models, we need to validate they are correctly populated.

For the REST model we need to use some kind of [Duck typing pattern](https://en.wikipedia.org/wiki/Duck_typing) checking whether the built field has some properties of the expected model.
Example:

```ts
expect(model).toEqual(
  expect.objectContaining({
    id: expect.any(String),
    key: expect.any(String),
    label: expect.objectContaining({
      en: expect.any(String),
      de: expect.any(String),
    }),
  })
);
```

For the GraphQL version, we can rely on the `__typename` property of the built value. If that value is what we expect, we don't need to check for other properties, as that property is already indicating the type of the built nested model.
Example:

```ts
expect(model).toEqual(
  expect.objectContaining({
    id: expect.any(String),
    key: expect.any(String),
    label: expect.objectContaining({
      __typename: 'LocalizedString',
    }),
  })
);
```

## CLI

Since all test data models have the same files structure, we've implemented a CLI script that will help you kickstart the new data model generation process.

You can run the CLI running this script from the repository's root directory:

```bash
pnpm generate-model
```

You would select the option to generate a new model (we hope the CLI can have more options in the future) and it will ask you:

- The name of the data model you want to create
- Whether you want to create a standalone model or a child one

Regarding the second question, a child data model is one that lives inside another top-level data model's package.

For instance, `ProductData` is a child of the `Product` data model package. The former only makes sense as a part of the latter. It can't be consumed in isolation.

Once the CLI has finished, you would have some new files in your local repository you can use to get up and running.
Those files will have some initial base implementation along with some `TODOs` which will give you some information about what to do next.
