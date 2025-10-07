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
          price: expect.objectContaining({
            centAmount: expect.any(Number),
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
        __typename: 'Zone',
      }),
      zoneRef: expect.objectContaining({
        __typename: 'Reference',
      }),
      shippingRates: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'ShippingRate',
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
