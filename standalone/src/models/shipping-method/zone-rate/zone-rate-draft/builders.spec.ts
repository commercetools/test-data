import type { TZoneRateDraftRest, TZoneRateDraftGraphql } from '../types';
import {
  ZoneRateDraftRest,
  ZoneRateDraftGraphql,
  ZoneRateDraft,
} from './index';

function validateZoneRateModel(
  model: TZoneRateDraftRest | TZoneRateDraftGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      zone: expect.objectContaining({
        typeId: 'zone',
      }),
      shippingRates: expect.arrayContaining([
        expect.objectContaining({
          freeAbove: null,
          price: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
          tiers: [],
        }),
      ]),
    })
  );
}

describe('ZoneRateDraft model builders', () => {
  it('builds a REST model', () => {
    const restModel = ZoneRateDraftRest.random().build();

    validateZoneRateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ZoneRateDraftGraphql.random().build();

    validateZoneRateModel(graphqlModel);
  });
});

describe('ZoneRateDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ZoneRateDraft.random().build();

    validateZoneRateModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ZoneRateDraft.random().buildRest();

    validateZoneRateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ZoneRateDraft.random().buildGraphql<TZoneRateDraftGraphql>();

    validateZoneRateModel(graphqlModel);
  });
});
