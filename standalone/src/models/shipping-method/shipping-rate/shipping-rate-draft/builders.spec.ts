import type {
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
  TShippingRateDraft,
} from '../types';
import {
  ShippingRateDraftRest,
  ShippingRateDraftGraphql,
  ShippingRateDraft,
} from './index';

function validateModel(
  model: TShippingRateDraftRest | TShippingRateDraftGraphql | TShippingRateDraft
) {
  expect(model).toEqual(
    expect.objectContaining({
      freeAbove: null,
      price: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
      }),
      tiers: [],
    })
  );
}

describe('ShippingRateDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = ShippingRateDraftRest.random().build();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ShippingRateDraftGraphql.random().build();

    validateModel(graphqlModel);
  });
});

describe('ShippingRateDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ShippingRateDraft.random().build();

    validateModel(compatModel);
  });

  it('builds a REST model', () => {
    const compatRestModel = ShippingRateDraft.random().buildRest();

    validateModel(compatRestModel);
  });

  it('builds a GraphQL model', () => {
    const compatGraphqlModel =
      ShippingRateDraft.random().buildGraphql<TShippingRateDraftGraphql>();

    validateModel(compatGraphqlModel);
  });
});
