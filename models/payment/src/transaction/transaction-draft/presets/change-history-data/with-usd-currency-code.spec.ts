import { TTransactionDraft } from '../../../types';
import withUsdCurrencyCode from './with-usd-currency-code';

describe('Transaction with with the amount money of `USD` currencyCode preset', () => {
  it('should return the currencyCode of `USD`', () => {
    const transactionWithUsdMoneyPreset =
      withUsdCurrencyCode().build<TTransactionDraft>();

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
