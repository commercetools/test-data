import type { TMoneyDraft } from '../../../types';
import withUsdCurrencyCode from './with-usd-currency-code';

describe('MoneyDraft with a defined `USD` currencyCode', () => {
  it('should return a currencyCode set to `USD`', () => {
    const usdCurrencyCode = withUsdCurrencyCode().build<TMoneyDraft>();

    expect(usdCurrencyCode).toEqual(
      expect.objectContaining({
        currencyCode: 'USD',
        centAmount: expect.any(Number),
      })
    );
  });
});
