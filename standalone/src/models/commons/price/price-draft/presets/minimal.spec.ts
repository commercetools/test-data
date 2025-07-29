import { TPriceDraftGraphql, TPriceDraftRest } from '../../types';
import * as minimalPresets from './minimal';

const validateModel = (model: TPriceDraftRest | TPriceDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      channel: null,
      country: expect.stringMatching(/^[A-Z]{2}$/),
      custom: null,
      customerGroup: null,
      discounted: null,
      key: null,
      recurrencePolicy: null,
      tiers: null,
      validFrom: expect.any(String),
      validUntil: expect.any(String),
    })
  );
};

const validateRestModel = (model: TPriceDraftRest) => {
  validateModel(model);
  expect(model.value).toEqual(
    expect.objectContaining({
      centAmount: expect.any(Number),
      currencyCode: 'USD',
    })
  );
};

const validateGraphqlModel = (model: TPriceDraftGraphql) => {
  validateModel(model);
  expect(model.value).toEqual(
    expect.objectContaining({
      centPrecision: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: 'USD',
      }),
    })
  );
};

describe('PriceDraft model "minimal" presets', () => {
  it('builds a REST model', () => {
    const restModel = minimalPresets.restPreset().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = minimalPresets.graphqlPreset().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Channel model compatibility builders', () => {
  it('builds a default model', () => {
    const model = minimalPresets.compatPreset().build();

    validateRestModel(model);
  });

  it('builds a REST model', () => {
    const restModel = minimalPresets.compatPreset().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = minimalPresets
      .compatPreset()
      .buildGraphql<TPriceDraftGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
