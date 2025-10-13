import type { TZoneDraftGraphql, TZoneDraftRest } from '../../types';
import * as emptyPresets from './empty';

const validateModel = (model: TZoneDraftRest | TZoneDraftGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      key: undefined,
      description: undefined,
      locations: undefined,
    })
  );
};

describe('ZoneDraft "empty" preset builders', () => {
  it('builds a REST model', () => {
    const restModel = emptyPresets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets.graphqlPreset().build();

    validateModel(graphqlModel);
  });
});

describe('ZoneDraft "empty" preset compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const restModel = emptyPresets.compatPreset().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = emptyPresets.compatPreset().buildRest<TZoneDraftRest>();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets
      .compatPreset()
      .buildGraphql<TZoneDraftGraphql>();

    validateModel(graphqlModel);
  });
});
