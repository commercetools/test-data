# Test data models overview

A test data model is set of helper objects commercetools API consumers can use when writing their own tests in order to mock the data returned by commercetools services.

These helpers are flexible enough to represent different types of responses from different APIs and with different values.

## Public API

Each test data model has the same API which consists of:

- A Rest builder
- A GraphQL builder
- TypeScript types

A `Builder` is the object you are interacting with as a consumer. It has only two functions:

- `random`: exposes a fluent API which allows to build a customized version of the data model
- `presets`: predefined versions of the data model

This is how an entry point of a data model package looks like:

```ts
import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as GeometryPresets from './presets';

export * from './types';

export const GeometryRest = {
  random: RestModelBuilder,
  presets: GeometryPresets.restPresets,
};

export const GeometryGraphql = {
  random: GraphqlModelBuilder,
  presets: GeometryPresets.graphqlPresets,
};
```

### Examples

#### Building default random data models

```ts
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  type TGeometryRest,
  type TGeometryGraphql,
} from '@commercetools-test-data/geometry';

const restGeometry: TGeometryRest = RestModelBuilder.random().build();
const graphqlGeometry: TGeometryGraphql = GraphqlModelBuilder.random().build();
```

#### Building customized data models

```ts
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  type TGeometryRest,
  type TGeometryGraphql,
} from '@commercetools-test-data/geometry';

const restGeometry: TGeometryRest = RestModelBuilder.random()
  .coordinates([12.45, 66.33])
  .build();
const graphqlGeometry: TGeometryGraphql = GraphqlModelBuilder.random()
  .coordinates([12.45, 66.33])
  .build();
```

#### Building predefined version data models

```ts
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  type TGeometryRest,
  type TGeometryGraphql,
} from '@commercetools-test-data/geometry';

const restGeometry: TGeometryRest = RestModelBuilder.presets.munich().build();
const graphqlGeometry: TGeometryGraphql = GraphqlModelBuilder.presets
  .munich()
  .build();
```

## Internal structure

Test data model are implemented using some classes and helpers exposed from the [core](https://github.com/commercetools/test-data/tree/main/core) package.

### Fields config

The core file is named `fields-config` and its responsibility is to describe how the data model properties should be pre-populated and also resolve dependencies among them (if any).

Here's an example of a simple one:

```ts
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type { TGeometryGraphql, TGeometryRest } from './types';

const commonFieldsConfig = {
  type: fake(() => 'Point'),
  coordinates: fake((f) => [f.location.longitude(), f.location.latitude()]),
};

export const restFieldsConfig: TModelFieldsConfig<TGeometryRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TGeometryGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Geometry',
  },
};
```

As you can see, these files are required to export two configuration objects (`restFieldsConfig`, `graphqlFieldsConfig`) which describe how to populate the properties of the data model when building the default version.

The configuration objects have two properties:

- `fields` (**required**): Describe how the default values should be populated
- `postBuild` (_optional_): Callback function to run modifications on the built data model

Here's an example where we use `postBuild` option to populate some values which depend on others to be built first:

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
      ...model,
      name,
      description,
    };
  },
};
```

In this case, `name` and `description` depend on the values from `nameAllLocales` and `descriptionAllLocales` but we don't know them in advance, only once the data model has been built. The `postBuild` callback allows to manipulate the built object before it's returned to the consumer.

This function needs to return the complete object with the updated properties and the previously generated ones.

### Builders

The `builders` is another main file in which we actually create the objects which implement the fluent API that allows generating data models objects.

This is how it looks like:

```ts
import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateGeometryBuilder,
  TGeometryGraphql,
  TGeometryRest,
} from './types';

export const RestModelBuilder: TCreateGeometryBuilder<TGeometryRest> = () =>
  createSpecializedBuilder({
    name: 'GeometryRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateGeometryBuilder<
  TGeometryGraphql
> = () =>
  createSpecializedBuilder({
    name: 'GeometryGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
```

We're exporting one builder for each representation (REST and GraphQL) of the data models for each of which we use the respective `fields-config` file detailed above.

## Testing

It's very important we implement relevant tests for our data models builders so we can make sure consumers will be creating the right data out of our exported assets.

The bare minimum tests to implement are those which validate the generated default models contain the expected base data.

Here's an example:

```ts
import { GeometryRest, GeometryGraphql } from './index';

describe('Geometry Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = GeometryRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        type: 'Point',
        coordinates: expect.arrayContaining([
          expect.any(Number),
          expect.any(Number),
        ]),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = GeometryGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        type: 'Point',
        coordinates: expect.arrayContaining([
          expect.any(Number),
          expect.any(Number),
        ]),
        __typename: 'Geometry',
      })
    );
  });
});
```

It's also recommended to test a customized version of the data models as well:

```ts
it('should build a customized version of the GraphQL data model', () => {
  const graphqlModel = GeometryGraphql.random().coordinates([10, 20]).build();

  expect(graphqlModel).toEqual(
    expect.objectContaining({
      type: 'Point',
      coordinates: expect.arrayContaining([10, 20]),
      __typename: 'Geometry',
    })
  );
});
```
