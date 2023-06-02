import Money from '../../builder';
import { TMoneyBuilder } from '../../types';

const withUsCurrencyCode = (): TMoneyBuilder => Money().currencyCode('US');

export default withUsCurrencyCode;
