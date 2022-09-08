import type { TMoneyBuilder } from '../types';
import withCurrency from './with-currency';

it('should build money with currency', () => {
  const built = withCurrency().build<TMoneyBuilder>();
  expect(built).toEqual({
    type: expect.any(String),
    currencyCode: 'EUR',
    centAmount: expect.any(Number),
    fractionDigits: expect.any(Number),
  });
});
