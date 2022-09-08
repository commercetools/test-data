import type { TMoneyBuilder } from '../types';
import Money from '../builder';

const withCurrency = (currency = 'EUR'): TMoneyBuilder =>
  Money().currencyCode(currency);

export default withCurrency;
