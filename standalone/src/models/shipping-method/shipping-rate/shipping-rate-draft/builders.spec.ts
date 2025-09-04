import type {
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
} from './types';
import { ShippingRateDraftRest, ShippingRateDraftGraphql } from './index';

function validateRestModel(model: TShippingRateDraftRest) {
  expect(model).toEqual(
    expect.objectContaining({
      freeAbove: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      tiers: [
        expect.objectContaining({
          isMatching: expect.any(Boolean),
          price: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
          priceFunction: null,
          score: expect.any(Number),
          type: 'CartScore',
        }),
      ],
      isMatching: expect.any(Boolean),
    })
  );
}

function validateGraphqlModel(model: TShippingRateDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      freeAbove: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      tiers: [
        expect.objectContaining({
          isMatching: expect.any(Boolean),
          price: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
          priceFunction: null,
          score: expect.any(Number),
          type: 'CartScore',
        }),
      ],
      isMatching: expect.any(Boolean),
    })
  );
}

describe('Product model builders', () => {
  it('builds a REST model', () => {
    const restModel = ShippingRateDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingRateDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('Product model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ShippingRateDraftRest.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ShippingRateDraftRest.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingRateDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});
