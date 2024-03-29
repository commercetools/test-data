import { TShippingMethodDraft } from '../../../types';
import usZone from './with-us-zone-rate';

describe('ShippingMethod with `US` Zone preset', () => {
  it('should return the `US` Zone preset & `US` ShippingRate', () => {
    const usShippingMethod = usZone().build<TShippingMethodDraft>();

    expect(usShippingMethod).toEqual(
      expect.objectContaining({
        taxCategory: null,
        zoneRates: expect.arrayContaining([
          expect.objectContaining({
            shippingRates: expect.arrayContaining([
              expect.objectContaining({
                freeAbove: expect.objectContaining({
                  currencyCode: 'USD',
                }),
                price: expect.objectContaining({
                  currencyCode: 'USD',
                }),
              }),
            ]),
            zone: expect.objectContaining({
              typeId: 'zone',
              key: 'e2e-us-zone',
            }),
          }),
        ]),
        isDefault: false,
      })
    );
  });
});
