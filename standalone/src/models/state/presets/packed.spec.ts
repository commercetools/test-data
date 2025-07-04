import { TStateGraphql, TStateRest } from '../types';
import { restPreset, graphqlPreset, compatPreset } from './packed';

const validateRestModel = (model: TStateRest): void => {
  expect(model).toMatchObject({
    key: 'packed-state',
    name: expect.objectContaining({
      en: 'Packed',
      de: 'Verpackt',
    }),
  });
};

const validateGraphqlModel = (model: TStateGraphql): void => {
  expect(model).toMatchObject({
    key: 'packed-state',
    name: 'Packed',
    nameAllLocales: expect.arrayContaining([
      expect.objectContaining({
        locale: 'en',
        value: 'Packed',
        __typename: 'LocalizedString',
      }),
      expect.objectContaining({
        locale: 'de',
        value: 'Verpackt',
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
