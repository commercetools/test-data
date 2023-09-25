import type { TShippingMethod } from '../../../types';
import standardShippingMethod from './standard';

describe('Shipping Method with standard preset', () => {
  it('should return a standard shipping method preset', () => {
    const standardShippingPreset =
      standardShippingMethod().build<TShippingMethod>();

    expect(standardShippingPreset).toMatchObject({
      isDefault: true,
      key: 'standard-delivery',
      localizedName: undefined,
      name: 'Standard Delivery',
      taxCategory: {
        key: 'EU',
      },
      zoneRates: [
        {
          shippingRates: {
            price: {
              centAmount: 10000,
              currencyCode: 'EUR',
            },
            tiers: [],
          },

          zone: {
            key: 'europe',
            typeId: 'zone',
          },
        },
      ],
    });
  });
});
