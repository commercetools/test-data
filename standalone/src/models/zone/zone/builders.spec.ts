import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import type { TZoneGraphql, TZoneRest } from './types';

const validateModel = (model: TZoneRest | TZoneGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      createdAt: expect.any(String),
      createdBy: expect.objectContaining({
        clientId: expect.any(String),
      }),
      description: null,
      id: expect.any(String),
      key: null,
      name: expect.any(String),
      locations: expect.arrayContaining([
        expect.objectContaining({
          country: expect.any(String),
          state: null,
        }),
      ]),
      lastModifiedAt: expect.any(String),
      lastModifiedBy: expect.objectContaining({
        clientId: expect.any(String),
      }),
      version: expect.any(Number),
    })
  );
};

const validateGraphqlModel = (model: TZoneGraphql): void => {
  validateModel(model);
  expect(model).toEqual(
    expect.objectContaining({
      locations: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'Location',
        }),
      ]),
      __typename: 'Zone',
    })
  );
};

describe('Zone model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Zone model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = CompatModelBuilder().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = CompatModelBuilder().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CompatModelBuilder().buildGraphql<TZoneGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
