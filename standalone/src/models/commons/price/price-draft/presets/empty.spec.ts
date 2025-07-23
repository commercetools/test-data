import { TPriceDraftGraphql, TPriceDraftRest } from '../../types';
import * as emptyPresets from './empty';

const validateModel = (model: TPriceDraftRest | TPriceDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      channel: undefined,
      country: undefined,
      custom: undefined,
      customerGroup: undefined,
      discounted: undefined,
      key: undefined,
      recurrencePolicy: undefined,
      tiers: undefined,
      validFrom: undefined,
      validUntil: undefined,
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
      highPrecision: expect.objectContaining({
        type: 'highPrecision',
        currencyCode: expect.any(String),
        fractionDigits: expect.any(Number),
        preciseAmount: expect.any(Number),
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
