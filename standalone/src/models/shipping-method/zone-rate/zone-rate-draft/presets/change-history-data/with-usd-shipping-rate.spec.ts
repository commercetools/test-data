import type {
  TZoneRateDraft,
  TZoneRateDraftGraphql,
  TZoneRateDraftRest,
} from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-usd-shipping-rate';

const validateModel = (
  usZoneWithUsdShippingRate:
    | TZoneRateDraft
    | TZoneRateDraftGraphql
    | TZoneRateDraftRest
) => {
  expect(usZoneWithUsdShippingRate).toEqual(
    expect.objectContaining({
      zone: expect.objectContaining({
        typeId: 'zone',
        key: 'e2e-us-zone',
      }),
      shippingRates: expect.arrayContaining([
        expect.objectContaining({
          tiers: [],
          price: expect.objectContaining({
            currencyCode: 'USD',
            centAmount: expect.any(Number),
          }),
          freeAbove: expect.objectContaining({
            currencyCode: 'USD',
            centAmount: expect.any(Number),
          }),
        }),
      ]),
    })
  );
};

describe('Zone rate with `USD` shippingRate & e2e key preset', () => {
  it('should return the currencyCode: `USD` & key: `e2e-us-zone` for REST model', () => {
    const usZoneWithUsdShippingRate = restPreset().build();
    validateModel(usZoneWithUsdShippingRate);
  });

  it('should return the currencyCode: `USD` & key: `e2e-us-zone` for GraphQL model', () => {
    const usZoneWithUsdShippingRate = graphqlPreset().build();
    validateModel(usZoneWithUsdShippingRate);
  });

  it('should return the currencyCode: `USD` & key: `e2e-us-zone` for compatibility model', () => {
    const usZoneWithUsdShippingRate = compatPreset().build();
    validateModel(usZoneWithUsdShippingRate);
  });
});
