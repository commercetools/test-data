import type { TZoneRateRest, TZoneRateGraphql } from './types';
import { ZoneRateRest, ZoneRateGraphql, ZoneRate } from './index';

function validateRestModel(model: TZoneRateRest) {
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
          isMatching: null,
        }),
      ]),
    })
  );
}

function validateGraphqlModel(model: TZoneRateGraphql) {
  const zoneId = model.zone?.id;

  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'ZoneRate',
      zone: expect.objectContaining({
        __typename: 'Zone',
        id: zoneId,
        key: expect.any(String),
        name: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        createdBy: expect.any(Object),
        lastModifiedBy: expect.any(Object),
        description: expect.any(String),
        locations: expect.any(Array),
      }),
      zoneRef: expect.objectContaining({
        typeId: 'zone',
        __typename: 'Reference',
        id: zoneId,
      }),
      shippingRates: expect.arrayContaining([
        expect.objectContaining({
          freeAbove: null,
          price: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
          tiers: [],
          isMatching: null,
        }),
      ]),
    })
  );
}

describe('ZoneRate model builders', () => {
  it('builds a REST model', () => {
    const restModel = ZoneRateRest.random().build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ZoneRateGraphql.random().build();

    validateGraphqlModel(graphqlModel);
  });
});

describe('ZoneRate model compatibility builders', () => {
  it('builds a default (REST) model', () => {
    const compatModel = ZoneRate.random().build();

    validateRestModel(compatModel);
  });

  it('builds a REST model', () => {
    const restModel = ZoneRate.random().buildRest();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = ZoneRate.random().buildGraphql<TZoneRateGraphql>();

    validateGraphqlModel(graphqlModel);
  });
});
