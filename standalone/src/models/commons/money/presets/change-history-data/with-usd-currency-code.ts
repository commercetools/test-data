import Money from '../../builder';
import { TMoneyBuilder } from '../../types';

const withUsdCurrencyCode = (): TMoneyBuilder => Money().currencyCode('USD');

export default withUsdCurrencyCode;
