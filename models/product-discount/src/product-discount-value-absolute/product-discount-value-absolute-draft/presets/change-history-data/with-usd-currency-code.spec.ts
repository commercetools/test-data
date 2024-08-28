/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import type { TProductDiscountValueAbsoluteDraft } from '../../../types';
import withUsdCurrencyCode from './with-usd-currency-code';

it(`should set all fields to specified values`, () => {
  const withUsdCurrencyCodePreset =
    withUsdCurrencyCode().build<TProductDiscountValueAbsoluteDraft>();

  expect(withUsdCurrencyCodePreset).toEqual(
    expect.objectContaining({
      money: expect.arrayContaining([
        expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: 'USD',
        }),
      ]),
    })
  );
});
