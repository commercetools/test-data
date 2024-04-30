import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TTransactionDraftBuilder } from '../../../types';
import * as TransactionDraft from '../../index';

const withUsdCurrencyCode = (): TTransactionDraftBuilder =>
  TransactionDraft.random().amount(
    MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode()
  );

export default withUsdCurrencyCode;
