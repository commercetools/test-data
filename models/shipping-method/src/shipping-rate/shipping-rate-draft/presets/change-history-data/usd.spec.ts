import { TShippingRateDraft } from '../../../types';
import usd from './usd';

describe('us based customer', () => {
  it('should return us based addresses', () => {
    const shippingRate = usd().build<TShippingRateDraft>();

    expect(shippingRate).toEqual(
      expect.objectContaining({
        tiers: [],
        price: expect.objectContaining({
          currencyCode: expect.stringContaining('USD'),
          centAmount: expect.any(Number),
        }),
        freeAbove: expect.objectContaining({
          currencyCode: expect.stringContaining('USD'),
          centAmount: expect.any(Number),
        }),
      })
    );
  });
});
