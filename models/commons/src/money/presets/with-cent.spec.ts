import type { TMoneyBuilder } from '../types';
import withCent from './with-cent';

it('should build money with cent', () => {
  const built = withCent().build<TMoneyBuilder>();
  expect(built).toEqual({
    type: expect.any(String),
    currencyCode: 'EUR',
    centAmount: 10,
    fractionDigits: expect.any(Number),
  });
});
