# Building a new test data model

> [!IMPORTANT]
> This document builds on top of the [Test Data Models overview](../contributing/test-data-models-overview.md) one so it would be useful if you read it first.

In this document we explain the steps we need to take in order to build a new test data model.

## Context

First of all, remember that a test data model is a set of objects that allows to create objects that mimic commercetools APIs responses which help during testing implementation.

Also, since our public services APIs expose our entities in both REST and GraphQL representations, we need to first get familiar with the one we're going to build the test data model for.

A good place to start is the [HTTP API](https://docs.commercetools.com/api/) documentation site where we can learn about the entities and their shapes ([here](https://docs.commercetools.com/api/projects/products#product)'s an example for the `Product` entity).

For the GraphQL representations, we recommend using the `GraphQL Explorer` application in the Merchant Center as you can browse all the queries, mutations and types.

## Defining the types

You can start with the `types` file when building a new test data model where we need to define the shape of the data model's representations.

Here's an example of such a file:

```ts
import type { Channel, ChannelDraft } from '@commercetools/platform-sdk';
import type {
  TClientLoggingGraphql,
  TGeometryGraphql,
  TGeometryRest,
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TChannel = Channel;
export type TChannelRest = Omit<Channel, 'geoLocation'> & {
  geoLocation?: TGeometryRest;
};
export type TChannelGraphql = Omit<
  Channel,
  // In GraphQL, these properties have different shapes.
  'name' | 'description' | 'createdBy' | 'lastModifiedBy' | 'geoLocation'
> & {
  __typename: 'Channel';
  createdBy?: TClientLoggingGraphql;
  lastModifiedBy?: TClientLoggingGraphql;
  name?: string;
  nameAllLocales?: TLocalizedStringGraphql | null;
  description?: string;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  geoLocation?: TGeometryGraphql;
};

export type TChannelDraftRest = Omit<ChannelDraft, 'geoLocation'> & {
  geoLocation?: TGeometryRest;
};
export type TChannelDraftGraphql = Omit<
  ChannelDraft,
  'name' | 'description' | 'geoLocation'
> & {
  name?: TLocalizedStringDraftGraphql;
  description?: TLocalizedStringDraftGraphql;
  geoLocation?: TGeometryGraphql;
  __typename: 'ChannelDraft';
};

export type TCreateChannelBuilder<
  TChannelModel extends
    | TChannelRest
    | TChannelGraphql
    | TChannelDraftRest
    | TChannelDraftGraphql,
> = () => TBuilder<TChannelModel>;
```

As you can see, we have four main types: two for the full entity (`TChannelRest` and `TChannelGraphql`) and another pair for the draft version (`TChannelDraftRest` and `TChannelDraftGraphql`).

The REST representations are just using the `@commercetools/platform-sdk`.
This is a package which is auto-generated with the latest versions of the commercetools REST APIs and already contains all the Typescript interfaces describing the models.

On the other hand, the GraphQL representation can use the previous ones as a blueprint, but most likely will use different types for some of their properties (specially the nested models).

## Configuring fields

The next step can involve creating the `fields-config` file where we need to implement the population of the default values we want the test data model to have.

Since we have two representations for it (REST and GRAPHQL), we need to export two objects.

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
  geoLocation: null,
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
      name,
      description,
    };
  },
};
```

Probably you have spotted the `postBuild` property in the Graphql config object.

This is an optional one which we should only use if there are any dependencies among the data model fields.
In this case, `name` and `description` depend on the values from `nameAllLocales` and `descriptionAllLocales` but we don't know them in advance but only once the data model has been built. The `postBuild` callback allows to manipulate the built object before it's returned to the consumer.

## Testing

You are expected to implement tests for the builders (rest and graphql) that cover the generation of the default version of the data model as well as customized ones.

Examples of code to test:

```ts
// Default version
const restChannel: TChannelRest = ChannelRest.random().build();

// Customized version
const graphqlChannel: TChannelGraphql = ChannelGraphql.random()
  .nameAllLocales(LocalizedString.random().en('Channel name'))
  .descriptionAllLocales(LocalizedString.random().en('Channel description'))
  .geometry(GeometryGraphql.random().coordinates([10, 20]))
  .build();
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
