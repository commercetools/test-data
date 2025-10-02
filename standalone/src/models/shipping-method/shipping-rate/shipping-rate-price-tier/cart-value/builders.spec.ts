import type {
  TCartValuePriceTierRest,
  TCartValuePriceTierGraphql,
} from './types';
import {
  CartValuePriceTierDraftRest,
  CartValuePriceTierGraphql,
} from './index';

function validateRestModel(model: TCartValuePriceTierRest) {
  expect(model).toEqual(
    expect.objectContaining({
      type: 'CartValue',
      minimumCentAmount: expect.any(Number),
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      isMatching: expect.any(Boolean),
    })
  );
}

function validateGraphqlModel(model: TCartValuePriceTierGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      type: 'CartValue',
      minimumCentAmount: expect.any(Number),
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      isMatching: expect.any(Boolean),
      __typename: 'CartValuePriceTier',
    })
  );
}

describe('CartValuePriceTier model builders', () => {
  it('builds a REST model', () => {
    const restModel = CartValuePriceTierDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartValuePriceTierGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('CartValuePriceTier model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = CartValuePriceTierDraftRest.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = CartValuePriceTierDraftRest.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartValuePriceTierGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});
