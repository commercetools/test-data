import { TMoneyDraft } from '../../../types';
import withUsdCurrencyCodeCentMax from './with-usd-currency-code-max-cent';

describe('MoneyDraft with a defined `USD` currencyCode and defined max cent', () => {
  it('should return a currencyCode set to `USD` and max cent', () => {
    const usdCurrencyCodeMaxCent =
      withUsdCurrencyCodeCentMax().build<TMoneyDraft>();

    expect(usdCurrencyCodeMaxCent).toEqual(
      expect.objectContaining({
        currencyCode: 'USD',
        centAmount: expect.any(Number),
      })
    );
  });
});
