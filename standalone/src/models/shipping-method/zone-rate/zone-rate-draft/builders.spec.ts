import type {
  TZoneRateDraftRest,
  TZoneRateDraftGraphql,
  TZoneRateDraft,
} from '../types';
import {
  ZoneRateDraftRest,
  ZoneRateDraftGraphql,
  ZoneRateDraft,
} from './index';

function validateModel(
  model: TZoneRateDraftRest | TZoneRateDraftGraphql | TZoneRateDraft
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

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ZoneRateDraftGraphql.random().build();

    validateModel(graphqlModel);
  });
});

describe('ZoneRateDraft model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ZoneRateDraft.random().build();

    validateModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ZoneRateDraft.random().buildRest();

    validateModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel =
      ZoneRateDraft.random().buildGraphql<TZoneRateDraftGraphql>();

    validateModel(graphqlModel);
  });
});
