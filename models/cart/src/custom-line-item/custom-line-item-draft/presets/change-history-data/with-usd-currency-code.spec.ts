import type { TCustomLineItemDraft } from '../../../types';
import customLineItemWithUsdCurrencyCode from './with-usd-currency-code';

describe('Custom line item with a MoneyDraft `USD` currencyCode', () => {
  it('should return a custom line item with the money currencyCode set to `USD`', () => {
    const usdCurrencyCode =
      customLineItemWithUsdCurrencyCode().build<TCustomLineItemDraft>();

    expect(usdCurrencyCode).toEqual(
      expect.objectContaining({
        money: expect.objectContaining({
          currencyCode: 'USD',
        }),
      })
    );
  });
});
