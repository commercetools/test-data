import type {
  TCartClassificationPriceTierRest,
  TCartClassificationPriceTierGraphql,
} from './types';
import {
  CartClassificationPriceTierDraftRest,
  CartClassificationPriceTierGraphql,
} from './index';

function validateModel(
  model: TCartClassificationPriceTierRest | TCartClassificationPriceTierGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      type: 'CartClassification',
      value: expect.any(String),
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      isMatching: expect.any(Boolean),
    })
  );
}

describe('CartClassificationPriceTier model builders', () => {
  it('builds a REST model', () => {
    const restModel = CartClassificationPriceTierDraftRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartClassificationPriceTierGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toBe(
      'ShippingRateCartClassificationPriceTier'
    );
  });
});

describe('CartClassificationPriceTier model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = CartClassificationPriceTierDraftRest.random().build();

    validateModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = CartClassificationPriceTierDraftRest.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartClassificationPriceTierGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toBe(
      'ShippingRateCartClassificationPriceTier'
    );
  });
});
