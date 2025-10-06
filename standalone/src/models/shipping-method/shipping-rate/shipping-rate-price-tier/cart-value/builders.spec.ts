import type {
  TCartValuePriceTierRest,
  TCartValuePriceTierGraphql,
} from './types';
import {
  CartValuePriceTierDraftRest,
  CartValuePriceTierGraphql,
} from './index';

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
    const restModel = CartValuePriceTierDraftRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartValuePriceTierGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'ShippingRateCartValuePriceTier',
      })
    );
  });
});

describe('CartValuePriceTier model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = CartValuePriceTierDraftRest.random().build();

    validateModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = CartValuePriceTierDraftRest.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartValuePriceTierGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'ShippingRateCartValuePriceTier',
      })
    );
  });
});
