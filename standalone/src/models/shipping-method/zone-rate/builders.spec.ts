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

function validateGraphqlModel(model: TZoneRateGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      __typename: 'ZoneRate',
      zone: expect.objectContaining({
        typeId: 'zone',
      }),
      zoneRef: expect.objectContaining({
        typeId: 'zone',
        __typename: 'Reference',
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
