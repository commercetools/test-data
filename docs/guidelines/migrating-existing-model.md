# Migrating an existing test data model

## Context

The way test data models must be implemented has changed over time since this repository was first created.

[Here](../contributing/test-data-models-overview.md) you can find the overview of how they currently should look like and [here](creating-new-model.md) are some guidelines about how to implement them.

We need to bear in mind those docs refer to the new patterns we decided to follow in order to create new data models, but at the time we did that, we already had 200+ existing ones we also need to support.

For those data models which had been implemented before the new agreement, we will be needing to migrate them in a backwards compatible way. We want to follow this way because we have too many data models needing migration and we don't want to be publishing a breaking change version of the packages (we use the same version number for all of them) every time we migrate one.
The idea is that we can migrate existing data models progressively and, once all of them have been migrated, that's the time we will be able to remove the compatibility and release only one breaking change version of all the packages.

## Why migrate an existing data model?

Since we now have a new way for implementing test data models but the actual ones are currently working, why should we even bother to migrate them?

The idea of the new implementing patterns comes from the experience of working with the actual ones where we identified a steep learning-curve and maintainability problems.
Migrating the existing data models will improve the health of this repository and the engineers working on it.

## How to migrate

Let's start with what are the key files we use in the legacy data models:

- `types.ts`: This is where we define all the types which describe the model objects
- `generator.ts`: This is where we implement the population of the default model values
- `transformers.ts`: This is where we manage nested models and dependent model properties
- `builder.ts`: This is where we create the main function that generates data models
- `index.ts`: This is where we expose the data model's package public API

Let's review each one of them and what we need to do.

### Types

In the legacy data models we were supporting three representations of a data model. Example:

```ts
import type { Channel } from '@commercetools/platform-sdk';
import type {
  TClientLoggingGraphql,
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';

export type TChannel = Channel;
export type TChannelRest = Channel;
export type TChannelGraphql = Omit<
  TChannel,
  'name' | 'description' | 'createdBy' | 'lastModifiedBy'
> & {
  __typename: 'Channel';
  createdBy: TClientLoggingGraphql;
  lastModifiedBy: TClientLoggingGraphql;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
};
```

In the new implementation patterns, we don't want to keep three representations of the data model so the first one (`TChannel` in this case) should no longer be used. You can see that it is the same as the `TChannelRest` type.
We can't remove it though as we need to be backwards compatible so we will just mark it as deprecated:

```ts
import type { Channel } from '@commercetools/platform-sdk';
import type {
  TClientLoggingGraphql,
  TLocalizedStringDraftGraphql,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';

/**
 * @deprecated use `TChannelRest` instead
 */
export type TChannel = Channel;
export type TChannelRest = Channel;
...
```

### Generator

One of the keys of the new implementation patterns strategy is that we won't be having only one data model object per entity but one per supported representation (REST and GraphQL at the moment). So instead of having just one exported object (the REST representation) which can be transformed to different version (eg: GraphQL), we will be directly exporting two objects (REST and GraphQL representations).

The `generator.ts` file is used to populate a data model with default values but it is only working with the REST representation. Then we use the `transformers.ts` file to implement how those values should look like for a GraphQL implementation.
Example:

```ts
import type { Channel } from '@commercetools/platform-sdk';
import { Address, ClientLogging } from '@commercetools-test-data/commons';
import { sequence, fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { roles } from './constants';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/channels#channel
const generator = Generator<Channel>({
  fields: {
    id: fake((f) => f.string.uuid()),
    key: fake((f) => f.lorem.slug(2)),
    version: sequence(),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedBy: fake(() => ClientLogging.random()),
    roles: [roles.Primary],
    name: null,
    description: null,
    address: fake(() => Address.random()),
    reviewRatingStatistics: null,
    custom: null,
    geoLocation: {
      type: 'Point',
      coordinates: [
        fake((f) => f.location.longitude()),
        fake((f) => f.location.latitude()),
      ],
    },
  },
});

export default generator;
```

With the new approach, we want to have different generators for each data model representation and we do that by creating a new file called `fields-config.ts` where we describe how each data model field should be populated by default in each representation.

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
};
```

Some fields will have the same values in both representations so we can extract them to a common helper, but the file will export two configuration (`restFieldsConfig` and `graphqlFieldsConfig`).

So after we create and implement the `fields-config.ts` file, we will be removing the `generator.ts` one.

### Transformers

We use this file to describe how we can transform the values of the base data model representation (REST) to another one (GraphQL). That might imply adding new fields or calculate values based on others.
Here is an example of the legacy implementation:

```ts
import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TChannel, TChannelGraphql } from './types';

const transformers = {
  default: Transformer<TChannel, TChannel>('default', {
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'name',
      'description',
      'address',
    ],
  }),
  rest: Transformer<TChannel, TChannel>('rest', {
    buildFields: [
      'createdBy',
      'lastModifiedBy',
      'name',
      'description',
      'address',
    ],
  }),
  graphql: Transformer<TChannel, TChannelGraphql>('graphql', {
    buildFields: ['address', 'createdBy', 'lastModifiedBy'],
    addFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );

      return {
        __typename: 'Channel',
        nameAllLocales,
        descriptionAllLocales,
      };
    },
  }),
};

export default transformers;
```

With the new implementation patterns, since we will be having generators for each representation, we won't be needing to transform from one to the other. However, we will might need to populate dependent data model's fields. For such a use case, we will be extending the `fields-config.ts` file with the `postBuild` configuration option.
Example:

```ts
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

Once we are sure the dependent fields have been configured, we will remove the `transformers.ts` file.

### Builders

This `builder.ts` file is where we instantiate the main function that builds data models objects.
Example:

```ts
import type { Channel } from '@commercetools/platform-sdk';
import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateChannelBuilder } from './types';

const Model: TCreateChannelBuilder = () =>
  Builder<Channel>({
    generator,
    transformers,
  });

export default Model;
```

Using the new implementation patterns strategy, we need to have one builder per data model representation (REST and GraphQL), but here is where we have some extra code comparing it with a brand new data model.
If we only export two specialized builders, we would not be backwards compatible since current data model consumers are using the unified one. That's why we need to export a third builder which will implement a compatibility version of the new implementation patterns so we can export the same (now legacy) version they are using.
Example:

```ts
import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateChannelBuilder,
  TChannelGraphql,
  TChannelRest,
} from './types';

export const RestModelBuilder: TCreateChannelBuilder<TChannelRest> = () =>
  createSpecializedBuilder({
    name: 'ChannelRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateChannelBuilder<TChannelGraphql> = () =>
  createSpecializedBuilder({
    name: 'ChannelGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatChannelModelBuilder = <
  TChannelModel extends TChannelRest | TChannelGraphql = TChannelRest,
>() =>
  createCompatibilityBuilder<TChannelModel>({
    name: 'ChannelCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TChannelModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TChannelModel>,
    },
  });
```

### Entry point

This is the file that exports the public API of the package. We need to keep the current API and add the new one.

Here is how it currently looks like:

```ts
export * as Channel from '.';

export { default as random } from './builder';
export * as constants from './constants';
export { default as presets } from './presets';
export * from './types';
```

With this approach we're exporting a `Channel` object with the builder attached to the `random` property and also the `presets`. This allows consumers to use it like this:

```ts
import {
  Channel,
  type TChannel,
  type TChannelRest,
  type TChannelGraphql,
} from '@commercetools-test-data/channel';

const channel = Channel.random().build<TChannel>();
const restChannel = Channel.random().buildRest<TChannelRest>();
const restChannel = Channel.random().buildGraphql<TChannelGraphql>();

// Presets
const foodStoreChannel = Channel.presets.foodStore().build<TChannel>();
const restFoodStoreChannel = Channel.presets
  .foodStore()
  .buildRest<TChannelRest>();
const graphqlFoodStoreChannel = Channel.presets
  .foodStore()
  .buildGraphql<TChannelGraphql>();
```

Again, since we want to be backwards compatible, we need to keep that API and add the new builders.
Here is what it should look like:

```ts
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatChannelModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * from './channel-draft';
export * as Channel from '.';

export * as constants from './constants';
export * from './types';

export const ChannelRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ChannelGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ChannelRest` or `ChannelGraphql` exported models instead of `Channel`.
 */
export const random = CompatChannelModelBuilder;
export const presets = modelPresets.restPresets;
```

And here is how consumers would use it:

```ts
import {
  Channel,
  ChannelRest,
  ChannelGraphql,
  type TChannel,
  type TChannelRest,
  type TChannelGraphql,
} from '@commercetools-test-data/channel';

// These are now deprecated
const channel = Channel.random().build<TChannel>();
const restChannel = Channel.random().buildRest<TChannelRest>();
const restChannel = Channel.random().buildGraphql<TChannelGraphql>();

// These will be the preferred way
const newRestChannel: TChannelRest = ChannelRest.random().build();
const newGraphqlChannel: TChannelGraphql = ChannelGraphql.random().build();

// Presets (deprecated)
const foodStoreChannel = Channel.presets
  .foodStore()
  .build<TChannel>();
const restFoodStoreChannel = Channel.presets
  .foodStore()
  .buildRest<TChannelRest>();
const graphqlFoodStoreChannel = Channel.presets
  .foodStore()
  .buildGraphql<TChannelGraphql>();

// Presets (new way)
const newRestFoodStoreChannel: TChannelRest = ChannelRest.presets.
  .foodStore()
  .build();
const newGraphqlFoodStoreChannel: TChannelGraphql = ChannelGraphql.presets.
  .foodStore()
  .build();
```

### Testing

We need to keep the current tests passing (using the compatibility builder) but we also need to add tests for the new specialized builders as well (REST and GraphQL).

### Presets

Presets are just pre-populated instances of the data models with some static data.
With the legacy version, we were just exporting one object per preset, but since we now have three builders in the migrated version of the data models, presets need to expose one version for each one of them.

This is how the legacy version looks like:

```ts
import { LocalizedString } from '@commercetools-test-data/commons';
import Channel from '../builder';

const foodStore = () =>
  Channel()
    .name(
      LocalizedString.presets
        .empty()
        .en('Food Store')
        .de('Lebensmittelgeschäft')
    )
    .key('food-store-key');

export default foodStore;
```

and now this is how the new compatibility version should look like:

```ts
import { LocalizedString } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import { Channel, ChannelGraphql, ChannelRest } from '../index';
import type { TChannel, TChannelGraphql, TChannelRest } from '../types';

const populatePreset = <TModel extends TChannelGraphql | TChannelRest>(
  builder: TBuilder<TModel>,
  nameField: keyof TModel = 'name'
) => {
  return builder[nameField](
    LocalizedString.presets.empty().en('Food Store').de('Lebensmittelgeschäft')
  ).key('food-store-key');
};

export const restPreset = (): TBuilder<TChannelRest> =>
  populatePreset(ChannelRest.random());

export const graphqlPreset = (): TBuilder<TChannelGraphql> =>
  populatePreset(ChannelGraphql.random(), 'nameAllLocales');

export const compatPreset = (): TBuilder<TChannel> =>
  populatePreset(Channel.random());
er<TChannel> =>
  populatePreset(Channel.random());
```

Bear in mind you might find different requirements for the GraphQL version where you might need to tailor a bit that preset generator. In this case, we can still manage population with a helper function using an optional parameter.

Also, there are data models which have generated presets for sample data (B2B and B2C). In that case, you should be using the [test-data-generation](https://github.com/commercetools/test-data-generation) repository to rebuild those presets.
That repository has already been setup to support generating sample data presets for both legacy and new versions of the data models.

Here's an example on how a preset generator looks like right now:

```ts
import { ChannelPagedQueryResponse } from '@commercetools/platform-sdk';
import { Fetcher, getEntities } from '../api/get-entities';
import { Dataset, PresetsGenerator } from '../types';
import { defineFilters } from './utils/filters';
import { fetchAllPages, generateEntity, generateIndex } from './utils/utils';

const generateChannels = async (dataset: Dataset) => {
  const fetchChannels = (limit: number, offset: number) =>
    getEntities<ChannelPagedQueryResponse>({
      entity: Fetcher.channels,
      queryArgs: {
        limit,
        offset,
      },
      dataset,
    });

  const results = await fetchAllPages(fetchChannels);

  for (const channel of results) {
    await generateEntity(channel, 'channel', channel.key, dataset);
  }

  await generateIndex(
    results.map((channel) => channel.key),
    'channel',
    dataset
  );
};

export class Generator extends PresetsGenerator {
  constructor() {
    super('Channels', [Dataset.B2B, Dataset.B2C]);
  }

  async generate(dataset: Dataset) {
    defineFilters();
    await generateChannels(dataset);
  }
}
```

The only change here is to tell generator helpers to use version 2 of the generation process:

```ts
import { ChannelPagedQueryResponse } from '@commercetools/platform-sdk';
import { Fetcher, getEntities } from '../api/get-entities';
import { Dataset, PresetsGenerator } from '../types';
import { defineFilters } from './utils/filters';
import { fetchAllPages, generateEntity, generateIndex } from './utils/utils';

const generateChannels = async (dataset: Dataset) => {
  const fetchChannels = (limit: number, offset: number) =>
    getEntities<ChannelPagedQueryResponse>({
      entity: Fetcher.channels,
      queryArgs: {
        limit,
        offset,
      },
      dataset,
    });

  const results = await fetchAllPages(fetchChannels);

  for (const channel of results) {
    /* --- HERE WE SPECIFIED TO USE 'v2' WHICH USES NEW PRESETS SYNTAX --- */
    await generateEntity(channel, 'channel', channel.key, dataset, 'v2');
  }

  await generateIndex(
    results.map((channel) => channel.key),
    'channel',
    dataset,
    /* --- HERE WE SPECIFIED TO USE 'v2' WHICH USES NEW PRESETS SYNTAX --- */
    'v2'
  );
};

export class Generator extends PresetsGenerator {
  constructor() {
    super('Channels', [Dataset.B2B, Dataset.B2C]);
  }

  async generate(dataset: Dataset) {
    defineFilters();
    await generateChannels(dataset);
  }
}
```
