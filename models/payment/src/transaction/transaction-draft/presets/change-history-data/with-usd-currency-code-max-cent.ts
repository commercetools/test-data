import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TTransactionDraftBuilder } from '../../../types';
import * as TransactionDraft from '../../index';

const withUsdCurrencyCodeCentMax = (): TTransactionDraftBuilder =>
  TransactionDraft.random().amount(
    MoneyDraft.presets.changeHistoryData.withUsdCurrencyCodeCentMax()
  );

export default withUsdCurrencyCodeCentMax;
