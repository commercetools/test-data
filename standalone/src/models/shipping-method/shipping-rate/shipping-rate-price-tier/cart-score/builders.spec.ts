import type {
  TCartScorePriceTierRest,
  TCartScorePriceTierGraphql,
} from './types';
import {
  CartScorePriceTierDraftRest,
  CartScorePriceTierGraphql,
} from './index';

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
    const restModel = CartScorePriceTierDraftRest.random().build();

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

describe('CartScorePriceTier model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = CartScorePriceTierDraftRest.random().build();

    validateModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = CartScorePriceTierDraftRest.random().buildRest();

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
