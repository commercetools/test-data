import { types } from '../constants';
import { TStateDraftGraphql, TStateDraftRest } from '../types';
import { StateDraft, StateDraftGraphql, StateDraftRest } from '.';

const validateModel = (model: TStateDraftRest | TStateDraftGraphql): void => {
  expect(model).toMatchObject({
    description: null,
    initial: null,
    key: expect.any(String),
    name: null,
    roles: null,
    transitions: null,
    type: expect.stringFromArray(Object.values(types)),
  });
};

describe('StateDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = StateDraftRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = StateDraftGraphql.random().build();

    validateModel(graphqlModel);
  });
});

describe('StateDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = StateDraft.random().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = StateDraft.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = StateDraft.random().buildGraphql<TStateDraftGraphql>();

    validateModel(graphqlModel);
  });
});
