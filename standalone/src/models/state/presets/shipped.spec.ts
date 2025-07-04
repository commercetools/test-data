import { TStateGraphql, TStateRest } from '../types';
import { restPreset, graphqlPreset, compatPreset } from './shipped';

const validateRestModel = (model: TStateRest): void => {
  expect(model).toMatchObject({
    key: 'shipped-state',
    name: expect.objectContaining({
      en: 'Shipped',
      de: 'Versandt',
    }),
  });
};

const validateGraphqlModel = (model: TStateGraphql): void => {
  expect(model).toMatchObject({
    key: 'shipped-state',
    name: 'Shipped',
    nameAllLocales: expect.arrayContaining([
      expect.objectContaining({
        locale: 'en',
        value: 'Shipped',
        __typename: 'LocalizedString',
      }),
      expect.objectContaining({
        locale: 'de',
        value: 'Versandt',
        __typename: 'LocalizedString',
      }),
    ]),
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
