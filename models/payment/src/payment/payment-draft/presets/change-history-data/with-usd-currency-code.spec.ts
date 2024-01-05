/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { TPaymentDraft } from '../../../types';
import withUsdCurrencyCode from './with-usd-currency-code';

it(`should set all fields to specified values`, () => {
  const withUsdCurrencyCodePresets =
    withUsdCurrencyCode().build<TPaymentDraft>();

  expect(withUsdCurrencyCodePresets).toEqual(
    expect.objectContaining({
      anonymousId: undefined,
      amountPlanned: expect.objectContaining({
        centAmount: expect.any(Number),
        currencyCode: 'USD',
      }),
      transactions: expect.arrayContaining([
        expect.objectContaining({
          amount: expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: 'USD',
          }),
        }),
      ]),
    })
  );
});
