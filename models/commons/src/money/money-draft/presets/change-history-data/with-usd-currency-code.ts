import type { TMoneyDraftBuilder } from '../../../types';
import MoneyDraft from '../../builder';

const withUsdCurrencyCode = (): TMoneyDraftBuilder =>
  MoneyDraft().currencyCode('USD');

export default withUsdCurrencyCode;
