import { TStateDraftGraphql, TStateDraftRest } from '../types';
import { StateDraft, StateDraftGraphql, StateDraftRest } from '.';

const validateRestModel = (model: TStateDraftRest): void => {
  expect(model).toMatchObject({
    key: expect.any(String),
    type: expect.any(String),
    name: expect.objectContaining({
      en: expect.any(String),
    }),
    description: expect.objectContaining({
      en: expect.any(String),
    }),
    initial: expect.any(Boolean),
    roles: expect.arrayContaining([expect.any(String)]),
    transitions: null,
  });
};

const validateGraphqlModel = (model: TStateDraftGraphql): void => {
  expect(model).toMatchObject({
    key: expect.any(String),
    type: expect.any(String),
    name: expect.arrayContaining([
      expect.objectContaining({
        locale: expect.any(String),
        value: expect.any(String),
      }),
    ]),
    description: expect.arrayContaining([
      expect.objectContaining({
        locale: expect.any(String),
        value: expect.any(String),
      }),
    ]),
    initial: expect.any(Boolean),
    roles: expect.arrayContaining([expect.any(String)]),
    transitions: null,
  });
};

describe('StateDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = StateDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = StateDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('StateDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = StateDraft.random().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = StateDraft.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = StateDraft.random().buildGraphql<TStateDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
