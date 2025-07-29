import { TPriceDraftGraphql, TPriceDraftRest } from '../../types';
import * as emptyPresets from './empty';

const validateModel = (model: TPriceDraftRest | TPriceDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      channel: null,
      country: null,
      custom: null,
      customerGroup: null,
      discounted: null,
      key: null,
      recurrencePolicy: null,
      tiers: null,
      validFrom: null,
      validUntil: null,
    })
  );
};

const validateRestModel = (model: TPriceDraftRest) => {
  validateModel(model);
  expect(model.value).toEqual(
    expect.objectContaining({
      centAmount: expect.any(Number),
      currencyCode: expect.any(String),
    })
  );
};

const validateGraphqlModel = (model: TPriceDraftGraphql) => {
  validateModel(model);
  expect(model.value).toEqual(
    expect.objectContaining({
      centPrecision: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
    })
  );
};

describe('PriceDraft model "empty" presets', () => {
  it('builds a REST model', () => {
    const restModel = emptyPresets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Channel model compatibility builders', () => {
  it('builds a default model', () => {
    const model = emptyPresets.compatPreset().build();

    validateRestModel(model);
  });

  it('builds a REST model', () => {
    const restModel = emptyPresets.compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = emptyPresets
      .compatPreset()
      .buildGraphql<TPriceDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
