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
                  currencyCode: expect.stringContaining('US'),
                }),
                price: expect.objectContaining({
                  currencyCode: expect.stringContaining('US'),
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

// shippingRates: expect.arrayContaining([
//   expect.objectContaining({
//     tiers: [],
//     price: expect.objectContaining({
//       currencyCode: expect.stringContaining('US'),
//       centAmount: expect.any(Number),
//     }),
//     freeAbove: expect.objectContaining({
//       currencyCode: expect.stringContaining('US'),
//       centAmount: expect.any(Number),
//     }),
//   }),
// ]),
//   })
// );
//   });
// });
