import type {
  TCartClassificationPriceTierRest,
  TCartClassificationPriceTierGraphql,
} from './types';
import {
  CartClassificationPriceTierDraftRest,
  CartClassificationPriceTierGraphql,
} from './index';

function validateRestModel(model: TCartClassificationPriceTierRest) {
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

function validateGraphqlModel(model: TCartClassificationPriceTierGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      type: 'CartClassification',
      value: expect.any(String),
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      isMatching: expect.any(Boolean),
      __typename: 'CartClassificationPriceTier',
    })
  );
}

describe('CartClassificationPriceTier model builders', () => {
  it('builds a REST model', () => {
    const restModel = CartClassificationPriceTierDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartClassificationPriceTierGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('CartClassificationPriceTier model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = CartClassificationPriceTierDraftRest.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = CartClassificationPriceTierDraftRest.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CartClassificationPriceTierGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});
