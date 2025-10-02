import type {
  TCartScorePriceTierRest,
  TCartScorePriceTierGraphql,
} from './types';
import {
  CartScorePriceTierDraftRest,
  CartScorePriceTierGraphql,
} from './index';

function validateRestModel(model: TCartScorePriceTierRest) {
  expect(model).toEqual(
    expect.objectContaining({
      type: 'CartScore',
      score: expect.any(Number),
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      isMatching: expect.any(Boolean),
    })
  );
}

function validateGraphqlModel(model: TCartScorePriceTierGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      type: 'CartScore',
      score: expect.any(Number),
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      isMatching: expect.any(Boolean),
      __typename: 'CartScorePriceTier',
    })
  );
}

describe('CartScorePriceTier model builders', () => {
  it('builds a REST model', () => {
    const restModel = CartScorePriceTierDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartScorePriceTierGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('CartScorePriceTier model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = CartScorePriceTierDraftRest.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = CartScorePriceTierDraftRest.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartScorePriceTierGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});
