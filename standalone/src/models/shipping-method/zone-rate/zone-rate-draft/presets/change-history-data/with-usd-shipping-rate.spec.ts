import type {
  TZoneRateDraft,
  TZoneRateDraftGraphql,
  TZoneRateDraftRest,
} from '../../../types';
import * as usZone from './with-usd-shipping-rate';

describe('Zone rate with `USD` shippingRate & e2e key preset', () => {
  const validateUsZonePreset = (
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

  it('should return the currencyCode: `USD` & key: `e2e-us-zone` for REST model', () => {
    const usZoneWithUsdShippingRate = usZone.restPreset().build();
    validateUsZonePreset(usZoneWithUsdShippingRate);
  });

  it('should return the currencyCode: `USD` & key: `e2e-us-zone` for GraphQL model', () => {
    const usZoneWithUsdShippingRate = usZone.graphqlPreset().build();
    validateUsZonePreset(usZoneWithUsdShippingRate);
  });

  it('should return the currencyCode: `USD` & key: `e2e-us-zone` for compatibility model', () => {
    const usZoneWithUsdShippingRate = usZone.compatPreset().build();
    validateUsZonePreset(usZoneWithUsdShippingRate);
  });
});
