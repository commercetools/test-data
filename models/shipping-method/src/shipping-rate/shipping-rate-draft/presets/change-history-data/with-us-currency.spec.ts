import { TShippingRateDraft } from '../../../types';
import usCurrency from './with-us-currency';

describe('Shipping rate with the Money `US` currencyCode preset', () => {
  it('should return the currencyCode of `US`', () => {
    const shippingRate = usCurrency().build<TShippingRateDraft>();

    expect(shippingRate).toEqual(
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
      })
    );
  });
});
