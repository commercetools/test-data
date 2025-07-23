import { TPriceDraftGraphql, TPriceDraftRest } from '../../types';
import * as withValuePresets from './with-value';

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

const validateRestModel = (model: TPriceDraftRest, currencyCode: string) => {
  validateModel(model);
  expect(model.value).toEqual(
    expect.objectContaining({
      centAmount: expect.any(Number),
      currencyCode,
    })
  );
};

const validateGraphqlModel = (
  model: TPriceDraftGraphql,
  currencyCode: string
) => {
  validateModel(model);
  expect(model.value).toEqual(
    expect.objectContaining({
      centPrecision: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode,
      }),
      highPrecision: expect.objectContaining({
        type: 'highPrecision',
        currencyCode,
        fractionDigits: expect.any(Number),
        preciseAmount: expect.any(Number),
      }),
    })
  );
};

describe('PriceDraft model "withValue" presets', () => {
  it('builds a REST model', () => {
    const restModel = withValuePresets.restPreset().build();

    // USD is the default currency code
    validateRestModel(restModel, 'USD');
  });
  it('builds a REST model with a custom currency code', () => {
    const restModel = withValuePresets
      .restPreset({ currencyCode: 'EUR' })
      .build();
    validateRestModel(restModel, 'EUR');
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withValuePresets.graphqlPreset().build();

    // USD is the default currency code
    validateGraphqlModel(graphqlModel, 'USD');
  });
  it('builds a GraphQL model with a custom currency code', () => {
    const graphqlModel = withValuePresets
      .graphqlPreset({ currencyCode: 'EUR' })
      .build();
    validateGraphqlModel(graphqlModel, 'EUR');
  });
});

describe('Channel model compatibility builders', () => {
  it('builds a default model', () => {
    const model = withValuePresets.compatPreset().build();

    validateRestModel(model, 'USD');
  });
  it('builds a default model with a custom currency code', () => {
    const model = withValuePresets
      .compatPreset({ currencyCode: 'EUR' })
      .build();
    validateRestModel(model, 'EUR');
  });

  it('builds a REST model', () => {
    const restModel = withValuePresets.compatPreset().buildRest();

    validateRestModel(restModel, 'USD');
  });
  it('builds a REST model with a custom currency code', () => {
    const restModel = withValuePresets
      .compatPreset({ currencyCode: 'EUR' })
      .buildRest();
    validateRestModel(restModel, 'EUR');
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withValuePresets
      .compatPreset()
      .buildGraphql<TPriceDraftGraphql>();

    validateGraphqlModel(graphqlModel, 'USD');
  });
  it('builds a GraphQL model with a custom currency code', () => {
    const graphqlModel = withValuePresets
      .compatPreset({ currencyCode: 'EUR' })
      .buildGraphql<TPriceDraftGraphql>();

    validateGraphqlModel(graphqlModel, 'EUR');
  });
});
