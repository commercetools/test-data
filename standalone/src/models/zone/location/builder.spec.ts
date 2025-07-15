import type { TLocationGraphql, TLocationRest } from './types';
import { Location, LocationGraphql, LocationRest } from './index';

const validateRestModel = (model: TLocationRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      country: expect.any(String),
      state: null,
    })
  );
};

const validateGraphqlModel = (model: TLocationGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      country: expect.any(String),
      state: null,
      __typename: 'Location',
    })
  );
};

describe('Location model builders', () => {
  it('builds a REST model', () => {
    const restModel = LocationRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = LocationGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Location model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = Location.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = Location.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = Location.random().buildGraphql<TLocationGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
