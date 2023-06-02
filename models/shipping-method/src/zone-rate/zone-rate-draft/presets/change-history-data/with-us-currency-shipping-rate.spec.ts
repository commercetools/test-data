import { TZoneRateDraft } from '../../../types';
import usZone from './with-us-currency-shipping-rate';

describe('Zone rate with `US` shippingRate preset', () => {
  it('should return the currencyCode of `US`', () => {
    const usZoneWithUSShippingRate = usZone().build<TZoneRateDraft>();

    expect(usZoneWithUSShippingRate).toEqual(
      expect.objectContaining({
        zone: expect.objectContaining({
          typeId: 'zone',
          key: 'e2e-us-zone',
        }),
        shippingRates: expect.arrayContaining([
          expect.objectContaining({
            tiers: [],
            price: expect.objectContaining({
              currencyCode: expect.stringContaining('US'),
              centAmount: expect.any(Number),
            }),
            freeAbove: expect.objectContaining({
              currencyCode: expect.stringContaining('US'),
              centAmount: expect.any(Number),
            }),
          }),
        ]),
      })
    );
  });
});
