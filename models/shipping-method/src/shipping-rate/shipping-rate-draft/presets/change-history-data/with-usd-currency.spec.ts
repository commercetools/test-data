import type { TShippingRateDraft } from '../../../types';
import usdCurrency from './with-usd-currency';

describe('Shipping rate with the MoneyDraft `USD` currencyCode preset', () => {
  it('should return the currencyCode of `USD`', () => {
    const shippingRateWithUsdCurrencyMoneyPreset =
      usdCurrency().build<TShippingRateDraft>();

    expect(shippingRateWithUsdCurrencyMoneyPreset).toEqual(
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
      })
    );
  });
});
