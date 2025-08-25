import type { TTeamGraphql, TTeamRest } from './types';
import { Team, TeamGraphql, TeamRest } from './index';

const validateRestModel = (model: TTeamRest) => {
  expect(model).toMatchObject({
    id: expect.any(String),
    name: expect.any(String),
    members: expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
        typeId: 'user',
      }),
    ]),
  });
};

const validateGraphqlModel = (model: TTeamGraphql) => {
  expect(model).toMatchObject({
    __typename: 'Team',
    id: expect.any(String),
    name: expect.any(String),
    members: expect.arrayContaining([
      expect.objectContaining({
        __typename: 'User',
      }),
    ]),
    membersRef: expect.arrayContaining([
      expect.objectContaining({
        __typename: 'Reference',
      }),
    ]),
  });
};

describe('Team model builders', () => {
  it('builds a REST model', () => {
    const restModel = TeamRest.random().build();
    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = TeamGraphql.random().build();
    validateGraphqlModel(graphqlModel);
  });
});

describe('Team model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = Team.random().build();
    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = Team.random().buildRest();
    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = Team.random().buildGraphql<TTeamGraphql>();
    validateGraphqlModel(graphqlModel);
  });
});
