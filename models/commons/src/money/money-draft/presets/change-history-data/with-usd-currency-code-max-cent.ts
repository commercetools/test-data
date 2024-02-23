import { TMoneyDraftBuilder } from '../../../types';
import MoneyDraft from '../../builder';

const range32Bit = (): number => {
  return Math.floor(Math.random() * 2147483648);
};

const withUsdCurrencyCodeCentMax = (): TMoneyDraftBuilder =>
  MoneyDraft().currencyCode('USD').centAmount(range32Bit());

export default withUsdCurrencyCodeCentMax;
