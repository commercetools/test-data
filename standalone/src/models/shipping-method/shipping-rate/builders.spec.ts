import type {
  TShippingRateRest,
  TShippingRateGraphql,
  TShippingRate,
} from './types';
import { ShippingRateRest, ShippingRateGraphql, ShippingRate } from './index';

function validateModel(
  model: TShippingRateRest | TShippingRateGraphql | TShippingRate
) {
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
          isMatching: null,
          price: null,
          score: expect.any(Number),
          priceFunction: null,
          type: 'CartScore',
        }),
      ],
      isMatching: expect.any(Boolean),
    })
  );
}

describe('ShippingRate model builders', () => {
  it('builds a REST model', () => {
    const restModel = ShippingRateRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingRateGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'ShippingRate',
      })
    );
  });
});

describe('ShippingRate model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ShippingRate.random().build();

    validateModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ShippingRate.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ShippingRate.random().buildGraphql<TShippingRateGraphql>();

    validateModel(graphqlModel);
    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'ShippingRate',
      })
    );
  });
});
