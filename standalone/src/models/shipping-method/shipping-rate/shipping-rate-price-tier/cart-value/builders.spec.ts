import type {
  TCartValuePriceTierRest,
  TCartValuePriceTierGraphql,
} from './types';
import { CartValuePriceTierRest, CartValuePriceTierGraphql } from './index';

function validateModel(
  model: TCartValuePriceTierRest | TCartValuePriceTierGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      type: 'CartValue',
      minimumCentAmount: expect.any(Number),
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      isMatching: null,
    })
  );
}

describe('CartValuePriceTier model builders', () => {
  it('builds a REST model', () => {
    const restModel = CartValuePriceTierRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartValuePriceTierGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toEqual('ShippingRateCartValuePriceTier');
  });
});
