import { TStateDraftGraphql, TStateDraftRest } from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-type-line-item-state';

const validateRestModel = (model: TStateDraftRest): void => {
  expect(model).toMatchObject({
    type: expect.any(String),
    roles: expect.arrayContaining([expect.any(String)]),
    key: expect.any(String),
    name: expect.objectContaining({
      en: expect.any(String),
    }),
  });
};

const validateGraphqlModel = (model: TStateDraftGraphql): void => {
  expect(model).toMatchObject({
    type: expect.any(String),
    roles: expect.arrayContaining([expect.any(String)]),
    key: expect.any(String),
    name: expect.arrayContaining([
      expect.objectContaining({
        locale: 'en',
        value: expect.any(String),
      }),
    ]),
  });
};

describe('StateDraft with type LineItemState presets', () => {
  it('builds a REST model', () => {
    const restModel = restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('StateDraft with type LineItemState compatibility presets', () => {
  it('builds a default (REST) model', () => {
    const restModel = compatPreset().build();

    validateRestModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = compatPreset().buildGraphql<TStateDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
