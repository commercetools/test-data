import { TTransactionDraft } from '../../../types';
import withUsdCurrencyCodeCentMax from './with-usd-currency-code-max-cent';

describe('Transaction with with the amount money of `USD` currencyCode and max cent amount preset', () => {
  it('should return the currencyCode of `USD` with a max cent amount', () => {
    const transactionWithUsdMoneyPreset =
      withUsdCurrencyCodeCentMax().build<TTransactionDraft>();

    expect(transactionWithUsdMoneyPreset).toEqual(
      expect.objectContaining({
        amount: expect.objectContaining({
          currencyCode: 'USD',
          centAmount: expect.any(Number),
        }),
      })
    );
  });
});
