import { TZoneRateDraft } from '../../../types';
import usZone from './with-usd-shipping-rate';

describe('Zone rate with `USD` shippingRate & e2e key preset', () => {
  it('should return the currencyCode: `USD` & key: `e2e-us-zone`', () => {
    const usZoneWithUsdShippingRate = usZone().build<TZoneRateDraft>();

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
  });
});
