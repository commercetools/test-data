import type {
  TCartClassificationPriceTierRest,
  TCartClassificationPriceTierGraphql,
} from './types';
import {
  CartClassificationPriceTierRest,
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
      isMatching: null,
    })
  );
}

describe('CartClassificationPriceTier model builders', () => {
  it('builds a REST model', () => {
    const restModel = CartClassificationPriceTierRest.random().build();

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
