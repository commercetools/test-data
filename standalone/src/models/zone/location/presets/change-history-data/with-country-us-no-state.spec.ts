import type { TLocationGraphql, TLocationRest } from '../../types';
import * as presets from './with-country-us-no-state';

const validateModel = (model: TLocationRest | TLocationGraphql): void => {
  expect(model).toEqual(
    expect.objectContaining({
      country: 'US',
      state: null,
    })
  );
};

describe('Location model withCountryUSNoState preset', () => {
  it('builds a REST model', () => {
    const restModel = presets.restPreset().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets.graphqlPreset().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('Location');
  });
});

describe('Location model withCountryUSNoState compatibility preset', () => {
  it('builds a default (REST) model', () => {
    const restModel = presets.compatPreset().build();

    validateModel(restModel);
  });

  it('builds a REST model', () => {
    const restModel = presets.compatPreset().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = presets
      .compatPreset()
      .buildGraphql<TLocationGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('Location');
  });
});
