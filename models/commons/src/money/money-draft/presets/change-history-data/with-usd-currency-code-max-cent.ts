import { TMoneyDraftBuilder } from '../../../types';
import MoneyDraft from '../../builder';

const random10DigitNumber = (): number => {
  return Math.floor(1000000000 + Math.random() * 9000000000);
};

const withUsdCurrencyCodeCentMax = (): TMoneyDraftBuilder =>
  MoneyDraft().currencyCode('USD').centAmount(random10DigitNumber());

export default withUsdCurrencyCodeCentMax;
