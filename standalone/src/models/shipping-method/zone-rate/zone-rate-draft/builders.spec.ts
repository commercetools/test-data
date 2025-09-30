import type { TZoneRateDraftRest, TZoneRateDraftGraphql } from '../types';
import { ZoneRateDraftRest, ZoneRateDraftGraphql } from './index';

function validateRestModel(model: TZoneRateDraftRest) {
  expect(model).toEqual(
    expect.objectContaining({
      zone: expect.objectContaining({
        typeId: 'zone',
      }),
      shippingRates: expect.arrayContaining([
        expect.objectContaining({
          freeAbove: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
          price: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
        }),
      ]),
    })
  );
}

function validateGraphqlModel(model: TZoneRateDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      zone: expect.objectContaining({
        typeId: 'zone',
      }),
      shippingRates: expect.arrayContaining([
        expect.objectContaining({
          freeAbove: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
          price: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
        }),
      ]),
    })
  );
}

describe('ZoneRateDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = ZoneRateDraftRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ZoneRateDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ZoneRateDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ZoneRateDraftRest.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ZoneRateDraftRest.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ZoneRateDraftGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});
