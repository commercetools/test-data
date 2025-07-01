import { TStateGraphql, TStateRest } from '../types';
import { restPreset, graphqlPreset, compatPreset } from './shipped';

const validateRestModel = (model: TStateRest): void => {
  expect(model).toMatchObject({
    id: expect.any(String),
    version: expect.any(Number),
    createdAt: expect.any(String),
    lastModifiedAt: expect.any(String),
    key: expect.any(String),
    type: expect.any(String),
    name: expect.objectContaining({
      en: expect.any(String),
    }),
    builtIn: expect.any(Boolean),
    initial: expect.any(Boolean),
    roles: expect.arrayContaining([expect.any(String)]),
  });
};

const validateGraphqlModel = (model: TStateGraphql): void => {
  expect(model).toMatchObject({
    id: expect.any(String),
    version: expect.any(Number),
    createdAt: expect.any(String),
    lastModifiedAt: expect.any(String),
    key: expect.any(String),
    type: expect.any(String),
    nameAllLocales: expect.arrayContaining([
      expect.objectContaining({
        __typename: 'LocalizedString',
      }),
    ]),
    builtIn: expect.any(Boolean),
    initial: expect.any(Boolean),
    roles: expect.arrayContaining([expect.any(String)]),
    __typename: 'State',
  });
};

describe('State model builders', () => {
  it('builds a REST model', () => {
    const restModel = restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('State model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = compatPreset().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = compatPreset().buildGraphql<TStateGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
