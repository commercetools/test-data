import Money from '../../builder';
import type { TMoneyBuilder } from '../../types';

const withUsdCurrencyCode = (): TMoneyBuilder => Money().currencyCode('USD');

export default withUsdCurrencyCode;
