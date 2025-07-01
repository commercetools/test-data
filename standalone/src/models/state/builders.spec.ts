import type { TStateGraphql, TStateRest } from './types';
import { State, StateGraphql, StateRest } from './index';

const validateRestModel = (model: TStateRest): void => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      type: expect.any(String),
      name: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      description: expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      }),
      initial: expect.any(Boolean),
      builtIn: expect.any(Boolean),
      roles: expect.any(Array),
      transitions: null,
      createdAt: expect.any(String),
      createdBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
      lastModifiedAt: expect.any(String),
      lastModifiedBy: expect.objectContaining({
        customer: expect.objectContaining({ typeId: 'customer' }),
      }),
    })
  );
};

const validateGraphqlModel = (model: TStateGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      type: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      initial: expect.any(Boolean),
      builtIn: expect.any(Boolean),
      roles: expect.any(Array),
      transitions: null,
      transitionsRef: null,
      createdAt: expect.any(String),
      createdBy: expect.objectContaining({
        __typename: 'Initiator',
        customerRef: expect.objectContaining({
          typeId: 'customer',
          __typename: 'Reference',
        }),
        userRef: expect.objectContaining({
          typeId: 'user',
          __typename: 'Reference',
        }),
      }),
      lastModifiedAt: expect.any(String),
      lastModifiedBy: expect.objectContaining({
        __typename: 'Initiator',
        customerRef: expect.objectContaining({
          typeId: 'customer',
          __typename: 'Reference',
        }),
        userRef: expect.objectContaining({
          typeId: 'user',
          __typename: 'Reference',
        }),
      }),
      __typename: 'State',
    })
  );
};

describe('State model builders', () => {
  it('builds a REST model', () => {
    const restModel = StateRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = StateGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('State model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = State.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = State.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = State.random().buildGraphql<TStateGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
