import type {
  TCartScorePriceTierRest,
  TCartScorePriceTierGraphql,
} from './types';
import { CartScorePriceTierRest, CartScorePriceTierGraphql } from './index';

function validateModel(
  model: TCartScorePriceTierRest | TCartScorePriceTierGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      type: 'CartScore',
      score: expect.any(Number),
      price: null,
      priceFunction: null,
      isMatching: null,
    })
  );
}

describe('CartScorePriceTier model builders', () => {
  it('builds a REST model', () => {
    const restModel = CartScorePriceTierRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartScorePriceTierGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'ShippingRateCartScorePriceTier',
      })
    );
  });
});
