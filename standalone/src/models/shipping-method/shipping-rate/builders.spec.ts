import type { TShippingRateRest, TShippingRateGraphql } from './types';
import { ShippingRateRest, ShippingRateGraphql, ShippingRate } from './index';

function validateRestModel(model: TShippingRateRest) {
  expect(model).toEqual(
    expect.objectContaining({
      freeAbove: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      price: expect.objectContaining({
        type: 'centPrecision',
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
          score: expect.any(Number),
          priceFunction: null,
          type: 'CartScore',
        }),
      ],
      isMatching: expect.any(Boolean),
    })
  );
}

function validateGraphqlModel(model: TShippingRateGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      freeAbove: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      price: expect.objectContaining({
        type: 'centPrecision',
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
          score: expect.any(Number),
          priceFunction: null,
          type: 'CartScore',
        }),
      ],
      isMatching: expect.any(Boolean),
      __typename: 'ShippingRate',
    })
  );
}

describe('ShippingRate model builders', () => {
  it('builds a REST model', () => {
    const restModel = ShippingRateRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingRateGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ShippingRate model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ShippingRate.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ShippingRate.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ShippingRate.random().buildGraphql<TShippingRateGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
